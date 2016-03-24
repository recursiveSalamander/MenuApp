var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');

var Nutrition_Restriction = bookshelf.Model.extend({
  tableName: 'nutrition_restrictions',

  users: function() {
    return this.belongsTo(User, 'user_id');
  }
});

module.exports = Nutrition_Restriction;
