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

    Utils.insertRestaurant(restaurant, function(data) {
      Utils.getRestaurantID(data, function(restaurantID) {
        Utils.insertMenuItem(menuitem, restaurantID, function(data) {
          Utils.getMenuItemID(data, function(menu_id) {
            Utils.insertRating(rating, userID, menu_id);
          });
        });
      });
    });
  },

  getRating: function(request, response) {
    // console.log('++line 31 inside getRating() pre Utils');
    var token = request.body.currentToken;
    var userID = Utils.getUserID(token);
    var restaurantId = request.body.restaurantId;
    // console.log('++line 35 in getRating() in ratingsCtrl restaurantId: ',request.body.restaurantId);
    Utils.createRatingsArray(userID, function(ratingsArray) {
      Utils.getRestaurantID(restaurantId, function(restaurant) {
        // console.log('++line 38 in getRating() in ratingCtrl restaurant: ',restaurant);
        Utils.averageRatings(restaurant, function(avgRatings) {
          console.log('++line 40 in getRating() in ratingCtrl avgRatings: ',avgRatings);
          console.log('++line 41 in getRating() in ratingCtrl ratingsArray: ',ratingsArray);
          ratingsArray.forEach(function(value) {
            for(var key in avgRatings) {
              console.log('++line 45 in forEach in getRating in RatingsCtrl key: ',key);
              if (value.entryId === key) {
                value.avgRating = avgRatings[key];
              }
            }
          });
          console.log('++line 50 in getRating() in ratingsCtrl ratingsArray: ',ratingsArray);
          response.send(ratingsArray);
        });
      });
    });
  },


  averageRatings: function(request, response) {
    console.log('++line 42 inside averageRatings() in ratingsController');
    var restaurantID = request.body.restaurantId;
    Utils.getRestaurantID(restaurantID, function(data) {
      console.log('++line 45 inside averageRatings() in ratingsController data: ',data);
      Utils.averageRatings(data, function(data) {
        response.send(data);
      });
    });
  }
};
