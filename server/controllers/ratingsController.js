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

    Utils.insertRestaurant(restaurant, function(data){
      Utils.getRestaurantID(data, function(restaurantID){
        Utils.insertMenuItem(menuitem, restaurantID, function(data){
          Utils.getMenuItemID(data, function(menu_id){
            Utils.insertRating(rating, userID, menu_id);
          });
        });
      });
    });
  },

  getRating: function(request, response){
    console.log('++line 31 inside getRating() in ratingsController request.body: ',request.body);
    var token = request.body.currentToken;
    var userID = Utils.getUserID(token)
    var restaurantID = request.body.restaurantId;
    console.log('++line 35 getRating() in ratingsController userId: ',userID);
    Utils.getRestaurantID(restaurantID, function(data) {
      Utils.createRatingsArray(userID, data, function(data) {
        console.log('++line 38 getrating() in ratingsController data: ',data);
        response.send(data);
      });
    })
  }
};
