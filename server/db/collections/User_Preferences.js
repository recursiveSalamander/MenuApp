var bookshelf = require('../schema.js').bookshelf;
var User_Preference = require('../models/User_Preference.js');

var User_Preferences = new bookshelf.Collection();
User_Preferences.model = User_Preference;
module.exports = User_Preferences;
