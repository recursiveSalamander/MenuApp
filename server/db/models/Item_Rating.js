var bookshelf = require('../schema.js').bookshelf;
var Promise = require('bluebird');

var Item_Rating = bookshelf.model.extend({
  tableName: 'rating_items'
})

module.exports = Item_Rating;
