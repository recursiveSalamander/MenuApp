var bookshelf = require('../schema.js').bookshelf;
var Item_Rating = require('../models/Item_Rating.js');

var Item_Ratings = new bookshelf.Collection();
Item_Ratings.model = Item_Rating;
module.exports = Item_Ratings;
