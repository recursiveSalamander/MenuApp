var request = require('request');
var knex = require('knex');
var _ = require('lodash');
var Item_Rating = require('../db/models/Item_Rating.js');
var User = require('../db/models/User.js');
var Restaurant = require('../db/models/Restaurant.js');
var Menu_Item = require('../db/models/Menu_Item.js');
var Utils = require('../utils.js');


module.exports = {
  postRatingToTable: function(request, response) {
    var token = request.body.currentToken;
    var userID = Utils.getUserID(token);
    var rating = request.body.rating;
    var menuitem = request.body.entryId;
    var restaurant = request.body.restaurantId;

    insertRestaurant(restaurant, function(data) {
      Utils.getRestaurantID(data, function(restaurantID) {
        insertMenuItem(menuitem, restaurantID, function(data) {
          Utils.getMenuItemID(data, function(menu_id) {
            insertRating(rating, userID, menu_id);
          });
        });
      });
    });
  },

  getRating: function(request, response) {
    var token = request.body.currentToken;
    var userID = Utils.getUserID(token);
    var restaurantId = request.body.restaurantId;

    createRatingsArray(userID, function(ratingsArray) {
      Utils.getRestaurantID(restaurantId, function(restaurant) {
        averageRatings(restaurant, function(avgRatings) {
          ratingsArray.forEach(function(value) {
            for(var key in avgRatings) {
              if (value.entryId === key) {
                value.avgRating = avgRatings[key];
              }
            }
          });
          response.send(ratingsArray);
        });
      });
    });
  },


  retrieveAverageRatings: function(request, response) {
    var restaurantID = request.body.restaurantId;
    Utils.getRestaurantID(restaurantID, function(data) {
      averageRatings(data, function(data) {
        response.send(data);
      });
    });
  }
};

var insertRestaurant = function(restaurant, callback){
  new Restaurant( {restaurant_id: restaurant} )
  .fetch()
  .then(function(exists) {
    if(!exists) {
      var newRestaurant = new Restaurant({
        restaurant_id: restaurant
      });
      newRestaurant.save()
      .then(function() {
        Utils.hasCallBack(restaurant, callback);
      });
    } else {
      Utils.hasCallBack(restaurant, callback);
    }
  });
};

var insertMenuItem = function(menuitem, restaurantID, callback){
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
        Utils.hasCallBack(menuitem, callback);
      });
    } else {
      Utils.hasCallBack(menuitem, callback);
    }
  });
};

var insertRating = function(rating, userID, menuitem, callback) {
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
     Utils.hasCallBack(savedItemRating, callback);
   });
 };

var createRatingsArray = function(userID, callback) {
  Item_Rating.where({user_id: userID}).fetchAll({withRelated: ['menu_items']})
  .then(function(data) {
    var formattedItemData = data.toJSON();
    var ratingsArray = [];
    for(var i = 0; i < formattedItemData.length; i++) {
      ratingsArray.push({rating: formattedItemData[i].rating, entryId: formattedItemData[i].menu_items.item});
    }
    Utils.hasCallBack(ratingsArray, callback);
  });
};

var averageRatings = function(restaurantID, callback) {
  Menu_Item.where({restaurant: restaurantID}).fetchAll({withRelated: ['ratings']})
  .then(function(data) {
    var formattedData = data.toJSON();
    var arr = [];
    for(var i = 0; i < formattedData.length; i++){
      for(var j = 0; j < formattedData[i].ratings.length; j++){
        arr.push({entryId: formattedData[i].item, rating: formattedData[i].ratings[j].rating});
      }
    }
    var array = {};
    var sum = 0;
    var counter = 0;
    for(var m = 1; m < arr.length-1; m++){
      if(m === 1){
        sum = arr[0].rating;
        counter = 1;
      }
      var currentItem = parseInt(arr[m].entryId);
      if(currentItem === parseInt(arr[m-1].entryId)){
        sum+=arr[m].rating;
        counter++;
        if(m===arr.length-1){
          parseInt(array[arr[m].entryId]) = parseInt((sum/counter).toFixed(1));
        }
      }
      else {
        array[arr[m-1].entryId] = parseInt((sum/counter).toFixed(1));
        sum = arr[m].rating;
        counter = 1;
        if(i=== arr.length - 1){
          array[arr[m].entryId] = parseInt(arr[m].rating.toFixed(1));
        }
      }
    }
    Utils.hasCallBack(array, callback);
  });
};
