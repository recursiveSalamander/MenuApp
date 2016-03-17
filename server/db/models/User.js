var bookshelf = require('../schema.js').bookshelf;
var Promise = require('bluebird');
var bcrypt = require('bcrypt-nodejs');

var User = bookshelf.Model.extend({

  tableName: 'users',

  initialize: function() {
    this.on('creating', this.hashPassword);
  },

  comparePassword: function(userEnteredPassword, callback) {
    var savedPassword = this.get('password');

    bcrypt.compare(userEnteredPassword, savedPassword, function(err, isMatch) {
      if(err) {
        throw err;
      } else {
        callback(null, isMatch);
      }
    });
  },

  hashPassword: function() {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
    }
})


module.exports = User;
