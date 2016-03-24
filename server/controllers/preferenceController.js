var Async = require('async');
var _ = require('lodash');
var utils = require('../utils.js');
var User = require('../db/models/User.js');
var User_Preference = require('../db/models/User_Preference.js');
var User_Taste = require('../db/models/User_Taste.js');
var Cuisine_Preference = require('../db/models/Cuisine_Preference.js');
var Nutrition_Restriction = require('../db/models/Nutrition_Restriction.js');

module.exports = {

  postPreferences: function(req, res) {
    var userID = utils.getUserID(req.body.token);
    var userDiet = req.body.dietaryRestrictions;
    var cuisines = req.body.cuisinePreference;
    var nutrients = req.body.nutritionPreference;

    var flavors = _.map(req.body.tastePreference, function(flavor) {
      return flavor;
    });

    var ingredientRelations = combineIngredients(req.body);

    var asyncTasks = [];

    asyncTasks.push(function(callback) {
      utils.updateUser(userID, 'diet', userDiet, function() {
        callback();
      });
    });

    asyncTasks.push(function(callback) {
      insertTastePreference(flavors, userID, function() {
        callback();
      });
    });

    _.forEach(ingredientRelations, function(relationship) {
      asyncTasks.push(function(callback) {
        insertIngredientPreference(relationship[0], relationship[1], userID, function() {
          callback();
        });
      });
    });

    _.forEach(cuisines, function(preferenceLevel, cuisine) {
      asyncTasks.push(function(callback) {
        insertCuisinePreference(cuisine, preferenceLevel, userID, function() {
          callback();
        });
      });
    });

    _.forEach(nutrients, function(max, nutrient) {
      asyncTasks.push(function(callback) {
        insertNutritionRestriction(nutrient, 0, max, userID, function() {
          callback();
        });
      });
    });

    Async.parallel(asyncTasks, function(err) {
      if (err) {
        console.log(err);
      }
    });

   }
};

var combineIngredients = function(data) {
  var ingredientRelations = [];

  _.forEach(data.userAllergies, function(allergy) {
    ingredientRelations.push([allergy, 'allergy']);
  });

  _.forEach(data.preferredIngredients, function(preference) {
    ingredientRelations.push([preference, 'liked']);
  });

  _.forEach(data.rejectedIngredients, function(dislike) {
    ingredientRelations.push([dislike, 'disliked']);
  });

  return ingredientRelations;
};


var insertIngredientPreference = function(ingredient, relation, userID, callback) {
  new User_Preference({user_id: userID})
  .save({ingredient: ingredient, relation: relation})
  .then(function(data) {
    callback(data);
  });
};

var insertTastePreference = function(tastePreferences, userID, callback) {
  new User_Taste({user_id: userID})
  .save({spicy:  tastePreferences[0],
         meaty:  tastePreferences[1],
         sour:   tastePreferences[2],
         sweet:  tastePreferences[3],
         salty:  tastePreferences[4],
         bitter: tastePreferences[5]
        })
  .then(function(data) {
    callback(data);
  });
};

var insertCuisinePreference = function(cuisine, preferenceLevel, userID, callback) {
  new Cuisine_Preference({user_id: userID})
  .save({origin: cuisine, preference_level: preferenceLevel})
  .then(function(data) {
    callback(data);
  });
};

var insertNutritionRestriction = function(type, min, max, userID, callback) {
  new Nutrition_Restriction({user_id: userID})
  .save({type: type, min: min, max: max})
  .then(function(data) {
    callback(data);
  });
};
