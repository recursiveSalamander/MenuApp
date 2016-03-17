var bookshelf = require('../schema.js').bookshelf;
var Promise = require('bluebird');

var Restaurant = bookshelf.Model.extend({
  tableName: 'restaurants'
})

module.exports = Restaurant;
