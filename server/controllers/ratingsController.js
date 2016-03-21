var request = require('request');
var knex = require('knex');
var _ = require('lodash');
var Item_Rating = require('../db/models/Item_Rating.js');
var User = require('../db/models/User.js');
var Restaurant = require('../db/models/Restaurant.js');
var Menu_Item = require('../db/models/Menu_Item.js');
var Utils = require('../utils.js');


module.exports = {
  postRatingToTable: function() {
    // var token = request.body.token;
    var userID = 3;
    var rating = 5;
    var menuitem = 'prime rib';
    var restaurant = 'bobs big boy';
    console.log('INSIDE POSTRATING');

    Utils.insertRestaurant(restaurant, function(data){
      Utils.getRestaurantID(data, function(restaurant_id){
        Utils.insertMenuItem(menuitem, restaurant_id, function(data){
          Utils.getMenuItemID(data, function(menu_id){
            Utils.insertRating(rating, userID, menu_id);
          })
        })
      })
    })
  }
}
