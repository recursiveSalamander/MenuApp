var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');

var User_Preference = bookshelf.Model.extend({
  tableName: 'nutrition_restriction',

  users: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = Nutrition_Restriction;
