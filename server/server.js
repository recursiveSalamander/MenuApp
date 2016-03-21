var express = require('express');
var request = require('request');
var jwt = require('jwt-simple');
var bodyParser = require('body-parser');

var user = require('./db/models/User.js');
var db = require('./db/schema.js');
var Cache = require('./constructors/Cache.js');

var app = express();

// Creates Cache to store restaurant IDs that correspond to empty menus
emptyMenus = new Cache('2 months ago', 86400000);

require('./routes/routes.js')(app, express);

var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
});

module.exports = app;
