var request = require('request');
var _ = require('lodash');
var User = require('../db/models/User.js');
var Users = require('../db/collections/Users.js');
var config = require('../db/config/config.js');
var Utils = require('../utils.js');

module.exports = {
  getProfile: function(req, res) {
    console.log('log');
    var token = req.body.currentToken;
    console.log('++line 11 in getProfile() in profileCtrl token: ',token);
    var userID = Utils.getUserID(token);
    console.log('++line 13 in getProfile() in profileController userID: ', userID);
    User.where({'id': userID}).fetch()
    .then(function (data) {
      var userInfo = data.toJSON();
      console.log(userInfo);
      res.send(userInfo);
    });
  }
};
