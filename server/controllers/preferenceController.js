var utils = require('../utils.js');
var User_Preference = require('../db/models/User_Preference.js');

module.exports = {

  postPreferences: function(req, res) {
    console.log(req.body);
    var tempUserId = 7;
    // inserts each portion into the appropriate table
    // ingredient relationships --> User_Preference

    // diet -> User table
    // cuisine -> cuisine table
    // flavor -> tastes table
  }
};

var insertIngredientPreference = function(ingredient, relation, userID, callback) {
  new User_Preference({ingredient: ingredient, relation: relation, user_id: userID})
  .save()
  .then(function(data) {
    callback(data);
  });
};

var insertFlavorPreference = function(flavorPreferences, userID, callback) {
  //new User_Taste
};
