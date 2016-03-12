var express = require('express');
var request = require('request');
var app = express();

var db = require('./db/schema.js');

// Routes
require('./routes/routes.js')(app, express);

var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
  console.log('http://localhost:' + port);
});

var io = require('socket.io')(server);

module.exports = app;
