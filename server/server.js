var express = require('express');
var request = require('request');
var app = express();
var user = require('./db/models/User.js');

var db = require('./db/schema.js');
require('./routes/routes.js')(app, express);

var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
});

module.exports = app;
