var request = require('request');
var _ = require('lodash');
var User = require('../db/models/User.js');
var Utils = require('../utils.js');
var User_Preference = require('../db/models/User_Preference.js');
var config = require('../db/config/config.js');


module.exports = {
  restrictionsRecommendation: function(req, res) {
    var token = req.body.currentToken;
    var userID = Utils.getUserID(token);
    var menu = req.body.menuData;

    getUserRestrictionInfo(userID, function(diet, allergies) {
      injectDietRestrictions(menu, diet, allergies, function(newMenu) {
        res.send(newMenu);
      });
    });
  }
};

var injectDietRestrictions = function(menu, diet, allergies, callback) {
  var totalEntries = 0;
  var counter = 0;

  _.forEach(menu, function(section) {
    totalEntries += section.entries.count;
  });

  _.forEach(menu, function(submenu, index) {
    _.forEach(submenu.entries.items, function(entry, subindex) {
      generateQuery(entry, function(query) {
        queryRecipes(query, diet, allergies, function(dietRestriction, allergyRestriction) {
          entry.dietRestriction = dietRestriction;
          entry.allergyRestriction = allergyRestriction;

          counter++;
          if (counter === totalEntries) {
            callback(menu);
          }
        });
      });

    });
  });
};

var generateQuery = function(item, callback) {
  var searchTerms = item.name.split(' ');
  var searchquery = searchTerms.join('+');

  var query = `http://api.yummly.com/v1/api/recipes?_app_id=${config.yummly.appId}` +
  `&_app_key=${config.yummly.appKey}&q=${searchquery}&facetField[]=diet`;

  callback(query);
};

var queryRecipes = function(query, diet, allergies, callback) {
  request(query, function(err, resp, body) {
    var allergyRestriction = {mostlikely: [], may: []};
    var dietRestriction = {};

    if (!err && resp.statusCode === 200) {
      var data = JSON.parse(body);
      var totalRecipeNumber = data.totalMatchCount;

      if (totalRecipeNumber >= 5) {
        _.forEach(data.facetCounts.diet, function(value, key) {
          var trimmedDietKey = diet.slice(4);
          var percentage = data.facetCounts.diet[key] / totalRecipeNumber;

          if (key === diet) {
            if(percentage < 0.66 && percentage >= 0.33) {
              dietRestriction.diet = trimmedDietKey;
              dietRestriction.message = 'possibly';
            }
            if(percentage < 0.33) {
              dietRestriction.diet = trimmedDietKey;
              dietRestriction.message = 'most likely';
            }
          }

          _.forEach(allergies, function(allergy) {
            var trimmedAllergyKey = allergy.slice(4, -5);
            if (key === allergy) {
              if(percentage < 0.66 && percentage >= 0.33) {
                allergyRestriction.may.push(trimmedAllergyKey);
              }
              if(percentage < 0.33) {
                allergyRestriction.mostlikely.push(trimmedAllergyKey);
              }
            }
          });
        });
      }
      callback(dietRestriction, allergyRestriction);
    }
  });
};

var getUserRestrictionInfo = function(userID, callback) {
  User.where({id: userID}).fetchAll({withRelated: ['preferences']})
  .then(function(preferenceData){
    var data = preferenceData.toJSON()[0];
    var diet = dietCodes[data.diet]|| 'none';
    var allergies = [];

    _.forEach(data.preferences, function(preference) {
      if (preference.relation === 'allergy') {
        allergies.push(allergyCodes[preference.ingredient]);
      }
    });
    callback(diet, allergies);
  });
};

var allergyCodes = {
  'Wheat'   : '392^Wheat-Free',
  'Gluten'  : '393^Gluten-Free',
  'Peanut'  : '394^Peanut-Free',
  'Tree nut': '395^Tree Nut-Free',
  'Dairy'   : '396^Dairy-Free',
  'Egg'     : '397^Egg-Free',
  'Seafood' : '398^Seafood-Free',
  'Sesame'  : '399^Sesame-Free',
  'Soy'     : '400^Soy-Free',
  'Sulfite' : '401^Sulfite-Free'
};

var dietCodes = {
  'vegan'            : '386^Vegan',
  'vegetarian'       : '387^Lacto-ovo vegetarian',
  'lacto vegetarian' : '388^Lacto vegetarian',
  'ovo vegetarian'   : '389^Ovo vegetarian',
  'pescetarian'      : '390^Pescetarian',
  'paleo'            : '403^Paleo'
};
