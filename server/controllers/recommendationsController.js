var request = require('request');
var _ = require('lodash');
var Async = require('async');
var Bluebird = require('bluebird');
var User = require('../db/models/User.js');
var Utils = require('../utils.js');
var User_Preference = require('../db/models/User_Preference.js');
var config = require('../db/config/config.js');


module.exports = {
  restrictionsRecommendationRewrite: function(req, res) {
    var token = req.body.currentToken;
    var userID = Utils.getUserID(token);
    var menu = req.body.menuData;

    getUserRestrictionInfo(userID, function(diet, allergies) {
      injectDietRestrictions()
    });

  },

  restrictionsRecommendation: function(req, res) {
    var menuData = req.body.menuData;
    var response_Ultimate = res;
    var diet;
    var disliked = [];
    var liked = [];
    var allergies = [];


    var getUserRestrictionInfo = function(callback) {
      console.log('inside getUserRestrictionInfo');
      var token = req.body.currentToken;
      var userID = Utils.getUserID(token);
      User.where({id: userID}).fetchAll({withRelated: ['preferences']})
      .then(function(data){
        //Grabbing all restrictions data from req body
        var data = data.toJSON()[0];

        //identifying diet key for json object
        switch(data.diet) {
          case "lacto vegetarian":
            diet = '388^Lacto vegetarian';
            break;
          case "ovo vegetarian":
            diet = '389^Ovo vegetarian';
            break;
          case "pescetarian":
            diet = '390^Pescetarian';
            break;
          case "vegan":
            diet = '386^Vegan';
            break;
          case "vegetarian":
            diet = '387^Lacto-ovo vegetarian';
            break;
          case "paleo":
            diet = '403^Paleo';
            break;
        }

        //pulls allergies and ingredients preferences
        for(var i=0; i<data.preferences.length; i++){
          switch(data.preferences[i].relation) {
            case 'allergy':
              allergies.push(data.preferences[i].ingredient);
              break;
            case 'liked':
              liked.push(data.preferences[i].ingredient);
              break;
            case 'disliked':
              disliked.push(data.preferences[i].ingredient);
              break;
          }
        }

        //identifying allergy key for json object
        for(var i=0; i< allergies.length; i++){
          switch(allergies[i]) {
            case 'Dairy':
              allergies[i] = '396^Dairy-Free';
              break;
            case 'Egg':
              allergies[i] = '397^Egg-Free';
              break;
            case 'Gluten':
              allergies[i] = '393^Gluten-Free';
              break;
            case 'Peanut':
              allergies[i] = '394^Peanut-Free';
              break;
            case 'Seafood':
              allergies[i] = '398^Seafood-Free';
              break;
            case 'Sesame':
              allergies[i] = '399^Sesame-Free';
              break;
            case 'Soy':
              allergies[i] = '400^Soy-Free';
              break;
            case 'Sulfite':
              allergies[i] = '401^Sulfite-Free';
              break;
            case 'Tree nut':
              allergies[i] = '395^Tree Nut-Free';
              break;
            case 'Wheat':
              allergies[i] = '392^Wheat-Free';
              break;
          }
        }
      });
      callback();
    }

    var yummlyAPIcalls = function(callback2){
      //TEMPORARY
      var diet = '387^Lacto-ovo vegetarian';
      var disliked = [];
      var liked = [];
      var allergies = ['396^Dairy-Free', '400^Soy-Free', '395^Tree Nut-Free', '392^Wheat-Free'];
      var freakingdone = false;
      // var dietRestriction;



          for(var x=0; x< menuData.length; x++){
            (function(x){
              for(var y=0; y < menuData[x].entries.items.length; y++){
                (function(y){
                  console.log('start of inside for loop------------------------------------------------------')
                  var key_words = menuData[x].entries.items[y].name.split(' ');
                  console.log('KREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE_words', key_words);
                  var searchquery = key_words.join('+');
                  var query = `http://api.yummly.com/v1/api/recipes?_app_id=0a1658f1&_app_key=26fcc7b19149942523604cf763d9321d&q=` + searchquery +
                  `&facetField[]=diet`;

                  //variables diet, disliked, liked, and allergies are ready for processing

                  request(query, function(err, resp, body) {
                    console.log('REQUEST START FOR KEYOWRD', searchquery)
                    var allergyRestriction = {mostlikely: [], may: []};
                    var dietRestriction = {};
                    if (!err && resp.statusCode === 200) {
                      var data = JSON.parse(body);
                      var totalRecipeNumber = data.totalMatchCount;

                      if(totalRecipeNumber >= 5){
                        for(var key in data.facetCounts.diet){
                          var trimmedKey = key.slice(4);
                          var percentage = data.facetCounts.diet[key] / totalRecipeNumber;
                          console.log('KEYY for diet', key);
                          console.log('diet for diet', diet);
                          if(key === diet){
                            console.log('INSIDEEEEEEEEEEEEEE diet cOMPARISON and this is trimmedkey', trimmedKey);
                            if(percentage >= 0.66){
                              console.log('percentage is > .66, object doesnt have anything in it');
                            }
                            if(percentage < 0.66 && percentage >= 0.33){
                              console.log('percentage is < .66 and > .33');
                              dietRestriction.diet = trimmedKey;
                              dietRestriction.message = 'possibly';
                            }
                            if(percentage < 0.33){
                              console.log('percentage is < .33');
                              dietRestriction.diet = trimmedKey;
                              dietRestriction.message = 'most likely';
                            }
                            console.log('here is your dietrestriction object', dietRestriction);
                          }
                        }

                        for(var key in data.facetCounts.diet){
                          var trimmedKey = key.slice(4, -5);
                          var percentage = data.facetCounts.diet[key] / totalRecipeNumber;
                          console.log('KEYY for allergies', key);
                          console.log('diet for allergies', diet);
                          for(var i=0; i<allergies.length; i++){
                            if(allergies[i] === key){
                              console.log('INSIDEEEEEEEEEEEEEE allergies cOMPARISON');
                              if(percentage >= 0.66){
                                console.log('percentage is > .66, object not created');
                              }
                              if(percentage < 0.66 && percentage >= 0.33){
                                console.log('percentage is < .66 and > .33');
                                allergyRestriction.may.push(trimmedKey);
                              }
                              if(percentage < 0.33){
                                console.log('percentage is < .33');
                                allergyRestriction.mostlikely.push(trimmedKey);
                              }
                              console.log('here is your allergyrestriction object', allergyRestriction);
                            }
                          }
                        }

                      }
                      else {
                        console.log('AHHHHHHHHHHHHHHHHHHHHHHHHHHHH TOTAL RECIPE NUMBER IS LESS THAN 5')
                      }
                    }
                    menuData[x].entries.items[y].allergyRestriction = allergyRestriction;
                    menuData[x].entries.items[y].dietRestriction = dietRestriction;
                    console.log('++line 166 in recommendationsController menudata: ',menuData[x].entries.items[y]);
                    console.log('allergyRestriction', allergyRestriction);
                    console.log('dietRestriction', dietRestriction);
                  });

                })(y);
              }

            })(x);
          }
          setTimeout(callback2(), 5000);
    }

    var sendRestrictionData = function(){
      console.log('ITS THE FINAL COUNTDOWN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
      response_Ultimate.send(req.body.menuData);
    }

    getUserRestrictionInfo(function(){
      yummlyAPIcalls(function(){

          sendRestrictionData();
        });
      });

}
}

var injectDietRestrictions = function(menu, diet, allergies, callback) {
  var counter = 0;

  _.forEach(menu, function(submenu, index) {
    _.forEach(submenu, function(entry, subindex) {
      var query = generateQuery(entry);

      queryRecipes(query, function() {})
    })
  });
}

var generateQuery = function(item) {
  var searchTerms = item.name.split(' ');
  var searchquery = searchTerms.join('+');

  var query = `http://api.yummly.com/v1/api/recipes?_app_id=${config.yummly.appId}` +
  `&_app_key=${config.yummly.appKey}&q=${searchquery}&facetField[]=diet`;

  return query;
}


var queryRecipes = function(query, callback) {
  request(query, function(err, resp, body) {
    var allergyRestriction = {mostlikely: [], may: []};
    var dietRestriction = {};

    if (!err && resp.statusCode === 200) {
      var data = JSON.parse(body);
      var totalRecipeNumber = data.totalMatchCount;

      if (totalRecipeNumber >= 5) {
        _.forEach(data.facetCounts.diet, function(key) {
          var trimmedDietKey = diet.slice(4);
          var trimmedAllergyKey = diet.slice(4, -5);
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
            if (key === allergy) {
              if(percentage < 0.66 && percentage >= 0.33) {
                allergyRestriction.may.push(trimmedAllergyKey);
              }
              if(percentage < 0.33) {
                allergyRestriction.mostlikely.push(trimmedAllergyKey);
              }
            }
          })
        });
      }
      callback(dietRestriction, allergyRestriction);
    }
  });
};


var yummlyAPIcalls = function(menu, diet, allergies, callback){
  var counter = 0;

  for(var x=0; x< menuData.length; x++){
    (function(x){
      for(var y=0; y < menuData[x].entries.items.length; y++){
        (function(y){
          console.log('start of inside for loop------------------------------------------------------')
          var key_words = menuData[x].entries.items[y].name.split(' ');
          console.log('KREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE_words', key_words);
          var searchquery = key_words.join('+');
          var query = `http://api.yummly.com/v1/api/recipes?_app_id=0a1658f1&_app_key=26fcc7b19149942523604cf763d9321d&q=` + searchquery +
          `&facetField[]=diet`;

          //variables diet, disliked, liked, and allergies are ready for processing

          request(query, function(err, resp, body) {
            console.log('REQUEST START FOR KEYOWRD', searchquery)
            var allergyRestriction = {mostlikely: [], may: []};
            var dietRestriction = {};
            if (!err && resp.statusCode === 200) {
              var data = JSON.parse(body);
              var totalRecipeNumber = data.totalMatchCount;

              if(totalRecipeNumber >= 5){
                for(var key in data.facetCounts.diet){
                  var trimmedDietKey = diet.slice(4);
                  var percentage = data.facetCounts.diet[diet] / totalRecipeNumber;

                  if(key === diet){
                    if(percentage < 0.66 && percentage >= 0.33){
                      dietRestriction.diet = trimmedKey;
                      dietRestriction.message = 'possibly';
                    }
                    if(percentage < 0.33){
                      dietRestriction.diet = trimmedKey;
                      dietRestriction.message = 'most likely';
                    }
                  }
                }

                for(var key in data.facetCounts.diet){
                  var trimmedKey = key.slice(4, -5);
                  var percentage = data.facetCounts.diet[key] / totalRecipeNumber;

                  for(var i=0; i<allergies.length; i++){
                    if(allergies[i] === key){

                      if(percentage < 0.66 && percentage >= 0.33){
                        allergyRestriction.may.push(trimmedKey);
                      }
                      if(percentage < 0.33){
                        allergyRestriction.mostlikely.push(trimmedKey);
                      }
                    }
                  }
                }

              }
              else {
                console.log('AHHHHHHHHHHHHHHHHHHHHHHHHHHHH TOTAL RECIPE NUMBER IS LESS THAN 5')
              }
            }
            menuData[x].entries.items[y].allergyRestriction = allergyRestriction;
            menuData[x].entries.items[y].dietRestriction = dietRestriction;
            console.log('++line 166 in recommendationsController menudata: ',menuData[x].entries.items[y]);
            console.log('allergyRestriction', allergyRestriction);
            console.log('dietRestriction', dietRestriction);
          });

        })(y);
      }
    })(x);
  }
}

var getUserRestrictionInfo = function(userID, callback) {
  User.where({id: userID}).fetchAll({withRelated: ['preferences']})
  .then(function(data){
    var data = data.toJSON()[0];
    var diet = dietCodes[data.diet];
    var allergies = [];

    _.forEach(data.preferences, function(preference) {
      if (preference.relation === 'allergy') {
        allergies.push(allergyCodes[preference.ingredient])
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
