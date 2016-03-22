var bookshelf = require('../schema.js').bookshelf;
var Menu_Item = require('../models/Menu_Item.js');

var Menu_Items = new bookshelf.Collection();
Menu_Items.model = Menu_Item;
module.exports = Menu_Items;
