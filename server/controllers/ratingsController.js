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
    // var token = request.body.currentToken;
    var userID = 7
    var rating = 5;
    var menuitem = 'prime rib';
    var restaurant = 'bobs big boy';

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

  returnRating: function(request, response){
    // var token = request.body.currentToken;
    var userID = 7;
    var restaurantID = 12;

    Utils.createRatingsArray(userID, restaurantID);
  }
};
