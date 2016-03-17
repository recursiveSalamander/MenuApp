var bookshelf = require('../schema.js').bookshelf;
var Promise = require('bluebird');

var Menu_Item = bookshelf.model.extend({
  tableName: 'menu_items'
})

module.exports = Menu_Item;
