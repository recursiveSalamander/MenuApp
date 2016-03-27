var jwt = require('jwt-simple');
var db = require('./db/schema.js');
var knex = require('knex');
var _ = require('lodash');
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


module.exports = {
  hasCallBack: function(data, callback){
    if(callback){
      console.log('running callback');
      callback(data);
    } else {
      console.log('returning data');
      return data;
    }
  },

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
      module.exports.hasCallBack(data, callback);
    });
  },


  getRestaurantID: function(restaurant, callback){
    // console.log('inside getRestaurantID');
    Restaurant.where({'restaurant_id': restaurant}).fetch()
    .then(function(data) {
      if (!data) {
        module.exports.insertRestaurant(restaurant)
        .then(function(data) {
          module.exports.hasCallBack(data.id, callback);
        });
      } else {
        module.exports.hasCallBack(data.id, callback);
      }
    });
  },


  insertRestaurant: function(restaurant, callback){
    new Restaurant( {restaurant_id: restaurant} )
    .fetch()
    .then(function(exists) {
      if(!exists) {
        var newRestaurant = new Restaurant({
          restaurant_id: restaurant
        });
        newRestaurant.save()
        .then(function() {
          module.exports.hasCallBack(restaurant, callback);
        });
      } else {
        module.exports.hasCallBack(restaurant, callback);
      }
    });
  },


  insertMenuItem: function(menuitem, restaurantID, callback){
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
          module.exports.hasCallBack(menuitem, callback);
        });
      } else {
        module.exports.hasCallBack(menuitem, callback);
      }
    });
  },

  getMenuItemID: function(menuitem, callback){
    Menu_Item.where({'item': menuitem}).fetch()
    .then(function (data) {
      module.exports.hasCallBack(data.id, callback);
    });
  },

  insertRating: function(rating, userID, menuitem, callback) {
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
       module.exports.hasCallBack(savedItemRating, callback);
     });
   },

   createRatingsArray: function(userID, callback) {
    Item_Rating.where({user_id: userID}).fetchAll({withRelated: ['menu_items']})
    .then(function(data) {
      var formattedItemData = data.toJSON();
      var ratingsArray = [];
      for(var i = 0; i < formattedItemData.length; i++) {
        ratingsArray.push({rating: formattedItemData[i].rating, entryId: formattedItemData[i].menu_items.item});
      }
      module.exports.hasCallBack(ratingsArray, callback);
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
