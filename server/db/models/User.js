var bookshelf = require('../schema.js').bookshelf;
var bcrypt = require('bcrypt-nodejs');
var promise = require('bluebird');
var Item_Rating = require('./Item_Rating.js');
var User_Preference = require('./User_Preference.js');

var User = bookshelf.Model.extend({

  tableName: 'users',

  ratings: function() {
    return this.hasMany(Item_Rating);
  },

  preferences: function() {
    return this.hasMany(User_Preference);
  },

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
    var cipher = promise.promisify(bcrypt.hash);
    return cipher(this.get('password'), null, null).bind(this)
      .then(function(hash) {
        this.set('password', hash);
      });
    }
});


module.exports = User;
