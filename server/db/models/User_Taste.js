var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');

var User_Taste = bookshelf.Model.extend({
  tableName: 'user_taste',

  users: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = User_Taste;
