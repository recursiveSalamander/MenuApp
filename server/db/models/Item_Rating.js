var bookshelf = require('../schema.js').bookshelf;
var User = require('./User.js');
var Menu_Item = require('./Menu_Item');
var Item_Rating = require('./Item_Rating.js');

var Item_Rating = bookshelf.Model.extend({
  tableName: 'item_ratings',

  users: function() {
    return this.belongsTo(User, "user_id");
  },

  menu_items: function() {
    return this.belongsTo(Menu_Item, "item_id");
  },
})

module.exports = Item_Rating;
