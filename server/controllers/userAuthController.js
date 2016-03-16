var request = require('request');
var _=require('lodash');
var jwt = require('jwt-simple');
var User = require('../db/models/User.js');


module.exports = {
  signup: function(request, response, next){
    var firstName = request.body.first_name;
    var lastName = request.body.last_name;
    var email = request.body.email;
    var password = request.body.password;
    var username = request.body.username;

    new User({username: username})
      .fetch()
      .then(function(){
        if(!username){
          var newUser = new User({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            username: username
          });
        newUser.save()
          .then(function(newUser){
            var token = jwt.encode(newUser, 'secret');
            response.json({token: token});
          });
        } else {
          return next(new Error('Username already exists'));
        }
    });
  }
};
