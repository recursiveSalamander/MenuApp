var request = require('request');
var _ = require('lodash');
var User = require('../db/models/User.js');
var Users = require('../db/collections/Users.js');
var config = require('../db/config/config.js');
var Utils = require('../utils.js');

module.exports = {
  getProfile: function(request, response) {
    var token = req.body.currentToken;
    console.log(token);
    var userID = Utils.getUserID(token);
    console.log('++line 13 in getProfile() in profileController userID: ');
    Users.fetch(userID)
    .then(function(collection) {
      collection = collection.toJSON();
      res.send(collection);
      console.log(collection);
    });
  }
};
