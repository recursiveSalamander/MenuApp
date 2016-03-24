var jwt = require('jwt-simple');
var db = require('./db/schema.js');
var knex = require('knex');
var Users = require('./db/collections/Users.js');
var User = require('./db/models/User.js');
var Menu_Items = require('./db/collections/Menu_Items.js');
var Menu_Item = require('./db/models/Menu_Item.js');
var Restaurants = require('./db/collections/Restaurants.js');
var Restaurant = require('./db/models/Restaurant.js');
var User_Preferences = require('./db/collections/User_Preferences.js');
var User_Preference = require('./db/models/User_Preference.js');
var Item_Rating = require('./db/models/Item_Rating.js');
var Item_Ratings = require('./db/collections/Item_Ratings.js');
var _ = require('lodash');


module.exports = {
  getUserID: function(token) {
    var currentUser = jwt.decode(token, 'secret');
    console.log(currentUser.id);
    return currentUser.id;
  },

  updateUser: function(userID, field, newValue, callback) {
    var parameter = {};
    parameter[field] = newValue;
    new User({id: userID}).save(parameter)
    .then(function(data) {
      callback(data);
    });
  },

  getRestaurantID: function(restaurant, callback){
    // console.log('inside getRestaurantID');
    Restaurant.where({'restaurant_id': restaurant}).fetch()
    .then(function(data) {
      if (!data) {
        module.exports.insertRestaurant(restaurant)
        .then(function(data) {
          if (callback) {
            callback(data.id);
          } else {
            return data.id;
          }
        })
      } else if (callback) {
        callback(data.id);
      } else {
        return data.id;
      }
    });
  },

  insertRestaurant: function(restaurant, callback){
    console.log('inside insertRestaurant');
    new Restaurant( {restaurant_id: restaurant} )
    .fetch()
    .then(function(exists) {
      if(!exists) {
        var newRestaurant = new Restaurant({
          restaurant_id: restaurant
        });
        newRestaurant.save()
        .then(function() {
          if(callback) {
            callback (restaurant);
          } else {
            return restaurant;
          }
        });
      } else {
        if(callback) {
          callback(restaurant);
        }
      }
    });
  },

  insertMenuItem: function(menuitem, restaurantID, callback){
    console.log('inside insertmenuitm');
    new Menu_Item( { item: menuitem} )
    .fetch()
    .then(function(exists) {
      if(!exists) {
        var newItem = new Menu_Item({
          item: menuitem,
          restaurant: restaurantID
        });
        newItem.save()
        .then(function() {
          if(callback){
            callback(menuitem);
          }
        });
      } else {
        if(callback) {
          callback(menuitem);
        }
      }
    });
  },

  getMenuItemID: function(menuitem, callback){
    console.log('insidegetmenuitemid');
    Menu_Item.where({'item': menuitem}).fetch()
    .then(function (data) {
      if(callback) {
        callback(data.id);
      } else {
        return data.id;
      }
    });
  },

  insertRating: function(rating, userID, menuitem, callback) {
   console.log('INSERTRATING: ', menuitem);
   Item_Rating.where({'user_id': userID, 'item_id': menuitem}).fetch()
   .then(function(myItemRating) {
       //if the rating already exists
       if (myItemRating !== null) {
         return myItemRating;
       }
       //if it doesnt exist, create a new rating object with the user/item id
       var newRating = new Item_Rating({
         user_id: userID,
         item_id: menuitem
       });
       return newRating;
       //this .then overwrites the rating if it already exists, or creates a new one
     }).then(function(myItemRating) {
       myItemRating.set({rating: rating});
       return myItemRating.save();
     }).then(function(savedItemRating) {
       if (callback) {
         callback(savedItemRating);
       }
     });
   },

   createRatingsArray: function(userID, restaurantID, callback) {
    Item_Rating.where({user_id: userID}).fetchAll({withRelated: ['menu_items']})
    .then(function(data) {
      var formattedItemData = data.toJSON();
      return formattedItemData;
    }).then(function(data){
      Menu_Item.where({restaurant: restaurantID}).fetchAll()
      .then(function(items) {
        var formattedMenuData = items.toJSON();
        var ratingsArr = [];
        for(var i = 0; i < data.length; i++){
          ratingsArr.push({rating: data[i].rating, entryId: formattedMenuData[i].item});
        }
        if(callback) {
          callback(ratingsArr);
        } else {
          return ratingsArr;
        }
      });
    });
  },

  ratingsAverage: function(ratingsArray) {
    var sum = 0;
    var average;
    for(var i = 0; i < ratingsArray.length; i++){
      sum += ratingsArray[i].rating;
    }
    sum = sum/ratingsArray.length;
    average = (Math.round(sum*4) / 4).toFixed(1);
    console.log({average: parseInt(average)});
    return {average: parseInt(average)};
  }
};