var bookshelf = require('..schema.js').bookshelf;
var Item_Ratings = require('/..models/Menu_Item.js');

var Menu_Ratings = new bookshelf.collection();
Menu_Ratings.model = Item_Rating;
module.exports = Item_Ratings;
