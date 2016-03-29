var request = require('request');
var _=require('lodash');
var User = require('../db/models/User.js');
var Utils = require('../utils.js');
var User_Preference = require('../db/models/User_Preference.js');

module.exports = {
  restrictionsRecommendation: function(request, response) {
    // var token = request.body.currentToken;
    // var userID = Utils.getUserID(token);
    var send = {};
    var userID = 4;
    User.where({id: userID}).fetchAll({withRelated: ['preferences']})
    .then(function(data){
      var data = data.toJSON()[0];
      var disliked = [];
      var liked = [];
      var allergies = [];
      var diet = data.diet;
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
      send.allergies = allergies;
      send.liked = liked;
      send.disliked = disliked;
      send.diet = diet;
      response.send(send);
    });

  }
};
