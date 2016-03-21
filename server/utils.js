var jwt = require('jwt-simple');
var db = require('./db/schema.js');
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
    return currentUser.id;
  },

  getRestaurantID: function(restaurant, callback){
    Restaurant.where({'restaurant_id': restaurant}).fetch()
    .then(function(data){
        if(callback){
          callback(data.id);
        } else {
          return data.id;
        }
      })
  },

  insertRestaurant: function(restaurant, callback){
    new Restaurant( {restaurant_id: restaurant} )
      .fetch()
      .then(function(exists){
        if(!exists){
          var newRestaurant = new Restaurant({
            restaurant_id: restaurant
          });
          newRestaurant.save()
          .then(function() {
            if(callback){
              callback(restaurant);
            }
          })
        };
      })
    },

  insertMenuItem: function(menuitem, restaurant_id, callback){
    new Menu_Item( { item: menuitem} )
    .fetch()
    .then(function(exists){
      if(!exists){
        var newItem = new Menu_Item({
          item: menuitem,
          restaurant_id: restaurant_id
        });
        newItem.save()
        .then(function() {
          if(callback){
            callback(menuitem);
          }
        })
      };
    })
  },

  getMenuItemID: function(menuitem, callback){
    Menu_Item.where({'item': menuitem}).fetch()
    .then(function (data){
      if(callback){
        callback(data.id);
      } else {
      return data.id
      }
    })
  },

  insertRating: function(rating, userID, menuitem, callback){
    console.log('INSERTRATING: ', menuitem);
    new Item_Rating({rating: rating})
    .fetch()
    .then(function(exists){
      if(!exists){
        var newRating = new Item_Rating({
          rating: rating,
          user_id: userID,
          item_id: menuitem
        });
        newRating.save()
        .then(function(){
          if(callback){
            callback(rating);
          }
        })
      }
    })
  }
}
