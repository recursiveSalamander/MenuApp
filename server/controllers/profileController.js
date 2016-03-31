var request = require('request');
var _ = require('lodash');
var User = require('../db/models/User.js');
var Users = require('../db/collections/Users.js');
var Utils = require('../utils.js');

module.exports = {
  getProfile: function(req, res) {
    var token = req.body.currentToken;
    var userID = Utils.getUserID(token);
    User.where({'id': userID}).fetch()
    .then(function (data) {
      var userInfo = data.toJSON();
      console.log(userInfo);
      res.send(userInfo);
    });
  },

  updateProfile: function(request, response) {
    var token = request.body.currentToken;
    var userID = Utils.getUserID(token);
    var username = request.body.username;
    var lastname = request.body.lastname;
    var firstname = request.body.firstname;
    var email = request.body.email;

    var obj = {};
    if (username) {
      obj.username = username;
    }
    if (lastname) {
      obj.last_name = lastname;
    }
    if (firstname) {
      obj.first_name = firstname;
    }
    if (email) {
      obj.email = email;
    }
    User.where({id: userID}).fetch()
    .then(function(data) {
      data.set(obj);
      return data.save();
    })
    .then(function(updatedProfile) {
      Utils.hasCallBack(updatedProfile);
    });
  }
};
