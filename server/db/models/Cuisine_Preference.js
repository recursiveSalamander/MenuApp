var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');

var Cuisine_Preference = bookshelf.Model.extend({
  tableName: 'cuisine_preference',

  users: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = Cuisine_Preference;
