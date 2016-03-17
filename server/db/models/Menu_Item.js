var bookshelf = require('../schema.js').bookshelf;
var Restaurant = require('./Restaurant.js');
var Item_Rating = require('./Item_Rating.js');

var Menu_Item = bookshelf.Model.extend({
  tableName: 'menu_items',

  restaurants: function() {
    return this.belongsTo(Restaurant, 'restaurant_id');
  },

  ratings: function() {
    return this.hasMany(Item_Rating);
  }

})

module.exports = Menu_Item;
