var bookshelf = require('../schema.js').bookshelf;
var User_Taste = require('../models/User_Taste.js');

var User_Tastes = new bookshelf.Collection();
User_Tastes.model = User_Taste;
module.exports = User_Tastes;
