var request = require('request');
var _= require('lodash');
var User = require('../db/models/User.js');
var Utils = require('../utils.js');
var User_Preference = require('../db/models/User_Preference.js');

module.exports = {
  restrictionsRecommendation: function(req, res) {
    // var token = request.body.currentToken;
    // var userID = Utils.getUserID(token);
    var menuData = req.body.menuData;
    var response_Ultimate = res;
    var send = {};
    var userID = 4;
    User.where({id: userID}).fetchAll({withRelated: ['preferences']})
    .then(function(data){
      //Grabbing all restrictions data from req body
      var data = data.toJSON()[0];

      var diet;
      var disliked = [];
      var liked = [];
      var allergies = [];

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

      //TEMPORARY
      var diet = '387^Lacto-ovo vegetarian';
      var disliked = [];
      var liked = [];
      var allergies = ['396^Dairy-Free', '400^Soy-Free', '395^Tree Nut-Free', '392^Wheat-Free', '396^Dairy-Free'];
      var allergyRestrictionIndex = {};
      var dietRestrictionIndex = {};

      // for(var x=0; x< menuData.length; x++){
        // for(var y=0; y < menuData[x].entries.items.length; y++){

          var key_words = menuData[0].entries.items[0].name.split(' ');
          var searchquery = key_words.join('+');
          var query = `http://api.yummly.com/v1/api/recipes?_app_id=0a1658f1&_app_key=26fcc7b19149942523604cf763d9321d&q=` + searchquery +
                      `&facetField[]=diet`;
          console.log('JUST AOBUT TO MAKE THE DAMN req YO', query);



      //variables diet, disliked, liked, and allergies are ready for processing

      request(query, function(err, resp, body) {
        if (!err && resp.statusCode === 200) {
          var data = JSON.parse(body);
          var totalRecipeNumber = data.totalMatchCount
          //console.log(data);

          for(var key in data.facetCounts.diet){
            var trimmedKey = key.slice(4);
            // dietRestrictionIndex[trimmedKey] = -1; ----- ASYNCHRONOUSLY BEING CALLED I NEED HELP
            var percentage = data.facetCounts.diet[key] / totalRecipeNumber;
            if(key === diet && totalRecipeNumber > 30){
              if(percentage >= 0.75){
                dietRestrictionIndex[trimmedKey] = 1;
              }
              if(percentage < 0.75 && percentage >= 0.5){
                dietRestrictionIndex[trimmedKey] = 2;
              }
              if(percentage < 0.5 && percentage >= 0.25){
                dietRestrictionIndex[trimmedKey] = 3;
              }
            }
          }

            for(var key in data.facetCounts.diet){
              var trimmedKey = key.slice(4, -5);
              var percentage = data.facetCounts.diet[key] / totalRecipeNumber;
              for(var i=0; i<allergies.length; i++){
              // allergyRestrictionIndex[trimmedKey] = -1; ----- ASYNCHRONOUSLY BEING CALLED I NEED HELP
              if(allergies[i] === key && totalRecipeNumber > 30){

                if(percentage >= 0.75){
                  allergyRestrictionIndex[trimmedKey] = 1;
                }
                if(percentage < 0.75 && percentage >= 0.5){
                  allergyRestrictionIndex[trimmedKey] = 2;
                }
                if(percentage < 0.5 && percentage >= 0.25){
                  allergyRestrictionIndex[trimmedKey] = 3;
                }
              }
            }
          }
        }
        req.body.menuData[0].entries.items[0].allergyIndexes = allergyRestrictionIndex;
        req.body.menuData[0].entries.items[0].dietRestrictionIndex = dietRestrictionIndex;
        console.log('ISTHIS WHAT U WANT BBY?', req.body.menuData[0].entries.items[0]);
        response_Ultimate.send(req.body.menuData);
      });


    // }
        // }
      })

    }
};
