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
      callback(data);
    } else {
      return data;
    }
  },

  getUserID: function(token) {
    var currentUser = jwt.decode(token, 'secret');
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

  getMenuItemID: function(menuitem, callback){
    Menu_Item.where({'item': menuitem}).fetch()
    .then(function (data) {
      module.exports.hasCallBack(data.id, callback);
    });
  }
};
