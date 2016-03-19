var request = require('request');
var _ = require('lodash');
var User = require('../db/models/User.js');
var Users = require('../db/collections/Users.js');
var config = require('../db/config/config.js');

module.exports = {
  getProfile: function(req, res) {
    Users.fetch()
      .then(function(collection) {
        collection = collection.toJSON();
        res.send(collection);
        console.log(collection);
      });
  },
};
