var bookshelf = require('../schema.js').bookshelf;
var Menu_Item = require('./Menu_Item.js').bookshelf;

var Restaurant = bookshelf.Model.extend({
  tableName: 'restaurants',

  items: function() {
      return this.hasMany('Menu_Item');
  }
});

module.exports = bookshelf.model('Restaurant', Restaurant);
