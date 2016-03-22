var bookshelf = require('../schema.js').bookshelf;
var Cuisine_Preference = require('../models/Cuisine_Preference.js');

var Cuisine_Preferences = new bookshelf.Collection();
Cuisine_Preferences.model = Cuisine_Preference;
module.exports = Cuisine_Preferences;
