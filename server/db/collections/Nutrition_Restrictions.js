var bookshelf = require('../schema.js').bookshelf;
var Nutrition_Restriction = require('../models/Nutrition_Restriction.js');

var Nutrition_Restrictions = new bookshelf.Collection();
Nutrition_Restrictions.model = Nutrition_Restriction;
module.exports = Nutrition_Restrictions;
