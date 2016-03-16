var bookshelf = require('../schema.js').bookshelf;
var User = require('../models/User.js');
var bcrypt = require('bcrypt-nodejs');

var Users = new bookshelf.Collection();

Users.model = User;

module.exports = Users;
