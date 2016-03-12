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

<<<<<<< 99d9923de79f7f47a10fd2ebd03dab131256a013
module.exports = app;
=======
var io = require('socket.io')(server);

module.exports = app;
>>>>>>> [setup] sets up socket io, sets up basic route structure, sets up dummy json in restaurantController, sets up front end methods for restaurant search
