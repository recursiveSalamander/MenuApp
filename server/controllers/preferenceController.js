var Async = require('async');
var _ = require('lodash');
var jwt = require('jwt-simple');
var utils = require('../utils.js');
var User = require('../db/models/User.js');
var User_Preference = require('../db/models/User_Preference.js');
var User_Taste = require('../db/models/User_Taste.js');
var Cuisine_Preference = require('../db/models/Cuisine_Preference.js');
var Nutrition_Restriction = require('../db/models/Nutrition_Restriction.js');
var knex = require('../db/schema.js').knex;

module.exports = {

  postPreferences: function(req, res) {
    var userID = utils.getUserID(req.body.token);
    var userDiet = req.body.diet;
    var cuisines = _.map(req.body.cuisinePreference, function(value, cuisine) {
      return {origin: cuisine, 'preference_level': value.eval, 'user_id': userID};
    });
    var nutrients = req.body.nutritionPreference;
    var flavors = _.map(req.body.tastePreference, function(flavor) {
      return flavor;
    });
    var ingredientRelations = combineIngredients(req.body, userID);

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

    asyncTasks.push(function(callback) {
      insertIngredientPreference(ingredientRelations, userID, function() {
        callback();
      });
    });

    asyncTasks.push(function(callback) {
      insertCuisinePreference(cuisines, userID, function() {
        callback();
      });
    });


    Async.parallel(asyncTasks, function(err) {
      if (err) {
        console.log(err);
      }
      res.send('Successfully saved preferences');
    });

  },

  getAllPreferences: function(request, response) {
    var token = request.body.token;
    var userID = utils.getUserID(token);
    getUserPreferences(userID, function(data1) {
      getCuisinePreferences(userID, function(data2) {
        getUserTastes(userID, function(data3) {
          var concattedData = data1.concat(data2);
          var moreConcattedData = concattedData.concat(data3);
          response.send(moreConcattedData);
        })
      })
    })
  }
};

var getCuisinePreferences = function(userID, callback) {
  Cuisine_Preference.where({user_id: userID}).fetchAll()
  .then(function (preferences) {
    var mapped = [];
    _.each(preferences.models, function(data) {
      mapped.push(data.attributes);
    });
      utils.hasCallBack(mapped, callback);
    });
};

var getUserPreferences = function(userID, callback) {
  User_Preference.where({user_id: userID}).fetchAll()
  .then(function(prefs) {
    var mapped = [];
    _.each(prefs.models, function(data) {
      mapped.push(data.attributes);
    });
    utils.hasCallBack(mapped, callback);
  });
};

var getUserTastes = function(userID, callback) {
  User_Taste.where({user_id: userID}).fetchAll()
  .then(function(tastes) {
  var mapped = [];
  _.each(tastes.models, function(data) {
    mapped.push(data.attributes);
  });
    utils.hasCallBack(mapped, callback);
  });
};


var combineIngredients = function(data, user) {
  var ingredientRelations = [];

  _.forEach(data.allergies, function(allergy) {
    ingredientRelations.push({ingredient: allergy, relation: 'allergy', 'user_id': user});
  });

  _.forEach(data.preferredIngredients, function(like) {
    ingredientRelations.push({ingredient: like, relation: 'liked', 'user_id': user});
  });

  _.forEach(data.rejectedIngredients, function(dislike) {
    ingredientRelations.push({ingredient: dislike, relation: 'disliked', 'user_id': user});
  });

  return ingredientRelations;
};


var insertIngredientPreference = function(preferences, userID, callback) {
  User_Preference.where({'user_id': userID}).destroy()
  .then(function() {
    return knex('user_preferences').insert(preferences).then(function() {
      callback();
    });
  });
};

var insertTastePreference = function(tastePreferences, userID, callback) {
  User_Taste.where({user_id: userID}).destroy()
  .then(function(myUsertaste) {
  var newUserTaste = new User_Taste({
      user_id: userID,
      spicy:  tastePreferences[0],
      meaty:  tastePreferences[1],
      sour:   tastePreferences[2],
      sweet:  tastePreferences[3],
      salty:  tastePreferences[4],
      bitter: tastePreferences[5]
    });
    newUserTaste.save().then(function(savedUsertaste) {
        utils.hasCallBack(savedUsertaste, callback);
      });
    });
};

var insertCuisinePreference = function(cuisines, userID, callback) {
  Cuisine_Preference.where({user_id: userID}).destroy()
  .then(function() {
    return knex('cuisine_preferences').insert(cuisines).then(function() {
      callback();
    });
  });
};
