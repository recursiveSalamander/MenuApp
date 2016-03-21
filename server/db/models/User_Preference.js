var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');

var User_Preference = bookshelf.Model.extend({
  tableName: 'user_preferences',

  users: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = User_Preference;
