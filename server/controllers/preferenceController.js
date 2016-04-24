var Async = require('async');
var _ = require('lodash');
var jwt = require('jwt-simple');
var utils = require('../utils.js');
var User = require('../db/models/User.js');
var User_Preference = require('../db/models/User_Preference.js');
var User_Taste = require('../db/models/User_Taste.js');
var Cuisine_Preference = require('../db/models/Cuisine_Preference.js');
var Nutrition_Restriction = require('../db/models/Nutrition_Restriction.js');

module.exports = {

  postPreferences: function(req, res) {
    var userID = utils.getUserID(req.body.token);
    var userDiet = req.body.diet;
    var cuisines = _.map(req.body.cuisinePreference, function(cuisine) {
      return cuisine;
    });
    var nutrients = req.body.nutritionPreference;
    var flavors = _.map(req.body.tastePreference, function(flavor) {
      return flavor;
    });
    // var allergies = req.body.alelrgies;
    var ingredientRelations = combineIngredients(req.body);
    console.log('tastes', flavors);

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

    asyncTasks.push(function(callback) {
      insertCuisinePreference(cuisines, userID, function() {
        callback();
      });
    });




    _.forEach(nutrients, function(max, nutrient) {
      asyncTasks.push(function(callback) {
        insertNutritionRestriction(nutrient, 0, max, userID, function() {
          callback();
        });
      });
    });

    // _.forEach(allergies, function(max, nutrient) {
    //   asyncTasks.push(function(callback) {
    //     insertNutritionRestriction(nutrient, 0, max, userID, function() {
    //       callback();
    //     });
    //   });
    // });

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
      getPreferences(userID, function(data2) {
        getUserTastes(userID, function(data3) {
          getUserDiet(userID, function(data4) {
          console.log('data from line 75: ', data1);
          console.log('data from line 76: ', data2);

          // _.each(data2, function(cuisinePreference){
          //   cuisineData[cuisinePreference.origin]
          // })
          console.log('data from line 77: ', data3);
          console.log('data from line 78: ', data4);
          data4 = [{diet: data4[0].diet}];
          var concattedData = data1.concat(data2).concat(data3).concat(data4);
          console.log('++line 83 in getAllPreferences in preferenceCtrl moreConcattedData: ', concattedData);
          response.send(concattedData);
          })
        })
      })
    })
  }
};

var getPreferences = function(userID, callback) {
  Cuisine_Preference.where({user_id: userID}).fetchAll()
  .then(function (preferences) {
    var mapped = [];
    _.each(preferences.models, function(data) {
      mapped.push(data.attributes);
      })
      utils.hasCallBack(mapped, callback);
    })
};

var getUserDiet = function(userID, callback) {
  User.where({id: userID}).fetchAll()
  .then(function(prefs) {
    var mapped = [];
    _.each(prefs.models, function(data) {
      mapped.push(data.attributes);
    })
    utils.hasCallBack(mapped, callback);
  })
}

var getUserPreferences = function(userID, callback) {
  User_Preference.where({user_id: userID}).fetchAll()
  .then(function(prefs) {
    var mapped = [];
    _.each(prefs.models, function(data) {
      mapped.push(data.attributes);
    })
    utils.hasCallBack(mapped, callback);
  })
};

var getUserTastes = function(userID, callback) {
  User_Taste.where({user_id: userID}).fetchAll()
  .then(function(tastes) {
  var mapped = [];
  _.each(tastes.models, function(data) {
    mapped.push(data.attributes);
  })
    utils.hasCallBack(mapped, callback);
  })
}


var combineIngredients = function(data) {
  var ingredientRelations = [];

  _.forEach(data.allergies, function(allergy) {
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
  User_Preference.where({'user_id': userID}).destroy()
  .then(function(myPreference) {
    var newPreference = new User_Preference({
      user_id: userID,
      ingredient: ingredient,
      relation: relation
    });
    newPreference.save().then(function(savedPreference) {
      utils.hasCallBack(savedPreference, callback);
    });
  });
};

var insertAllergies = function(allergies, userID, callback) {
  User_Preference.where({'user_id': userID}).destroy()
  .then(function() {
    var newPreference = new User_Preference({
      user_id: userID,
      ingredient: ingredient,
      relation: allergy
    });
    newPreference.save().then(function(savedPreference) {
      utils.hasCallBack(savedPreference, callback);
    });
  });
};

var insertTastePreference = function(tastePreferences, userID, callback) {
  User_Taste.where({user_id: userID}).destroy()
  .then(function(myUsertaste) {
  var newUserTaste = new User_Taste({
      user_id: userID,
      spicy:  tastePreferences[1],
      meaty:  tastePreferences[2],
      sour:   tastePreferences[3],
      sweet:  tastePreferences[4],
      salty:  tastePreferences[5],
      bitter: tastePreferences[6]
    });
    newUserTaste.save().then(function(savedUsertaste) {
        utils.hasCallBack(savedUsertaste, callback);
      });
    });
};

var insertCuisinePreference = function(cuisinePreferences, userID, callback) {
  Cuisine_Preference.where({user_id: userID}).destroy()
  .then(function(myCuisine) {
    var newCuisine = new Cuisine_Preference({
      user_id: userID,

      Italian: cuisinePreferences[0],
      Mexican: cuisinePreferences[1],
      Southern_Soulfood: cuisinePreferences[2],
      Southwestern: cuisinePreferences[3],
      French: cuisinePreferences[4],
      Indian: cuisinePreferences[5],
      chinese: cuisinePreferences[6],
      Cajun_Creole: cuisinePreferences[7],
      English: cuisinePreferences[8],
      Mediterranean: cuisinePreferences[9],
      Greek: cuisinePreferences[10],
      Spanish: cuisinePreferences[11],
      Thai: cuisinePreferences[12],
      German: cuisinePreferences[13],
      Moroccan: cuisinePreferences[14],
      Irish: cuisinePreferences[15],
      Cuban: cuisinePreferences[16],
      Japanese: cuisinePreferences[17],
      Swedish: cuisinePreferences[18],
      Hawaiian: cuisinePreferences[19],
      Hungarian: cuisinePreferences[20],
      Portugese: cuisinePreferences[21],
      American: cuisinePreferences[22]
    });
    console.log('NEWWWWWWWWWWCUISINE', newCuisine);
    newCuisine.save().then(function(savedCuisine) {
      utils.hasCallBack(savedCuisine, callback);
    });
  });
};

// var insertCuisinePreference = function(cuisine, preferenceLevel, userID, callback) {
//   Cuisine_Preference.where({user_id: userID}).destroy()
//   .then(function(myCuisine) {
//     var newCuisine = new Cuisine_Preference({
//       user_id: userID,
//       preference_level: preferenceLevel,
//       origin: cuisine
//     });
//     newCuisine.save().then(function(savedCuisine) {
//       utils.hasCallBack(savedCuisine, callback);
//     });
//   });
// };
