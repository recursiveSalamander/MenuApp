var request = require('request');
var _=require('lodash');
var jwt = require('jwt-simple');
var User = require('../db/models/User.js');


module.exports = {
  signup: function(request, response, next) {
    var firstName = request.body.first_name;
    var lastName = request.body.last_name;
    var email = request.body.email;
    var password = request.body.password;
    var username = request.body.username;
    console.log(username);
    new User({username: username})
    .fetch()
    .then(function(user) {
      if(!user) {
        var newUser = new User({
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          username: username
        });
        newUser.save()
        .then(function(newUser) {
          var token = jwt.encode(newUser, 'secret');
          response.json({token: token});
        });
      } else {
        return next(new Error('Username already exists'));
      }
    });
  },

  signin: function(request, response, next) {
    var username = request.body.loginUsername;
    var password = request.body.loginPassword;
    new User({username: username})
    .fetch()
    .then(function(user) {
      if(!user) {
        response.redirect('/#/signIn');
      } else {
        user.comparePassword(password, function(err, match) {
          if(match) {
            console.log("YOU ARE LOGGED IN. CONGRATULATIONS. I'M SO HAPPY FOR YOU.");
            var token = jwt.encode(user, 'secret');
            response.json({token: token});
          } else {
            return next(new Error("Whoops!"));
          }
        });
      }
    });
  }
};
