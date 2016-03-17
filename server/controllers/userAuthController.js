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

    new User({username: username})
      .fetch()
<<<<<<< HEAD
      .then(function() {
        if(!username) {
=======
      .then(function(){
        if(!username){
>>>>>>> parent of 6d4fb14... [Feature] Implemented password compare function
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
            console.log(token);
            response.json({token: token});
          });
        } else {
          return next(new Error('Username already exists'));
        }
    });
<<<<<<< HEAD
  },

  signin: function(request, response, next) {
    var username = request.body.loginUsername;
    var password = request.body.loginPassword;
    new User({username: username})
      .fetch()
      .then(function(user) {
        if(!user) {
          response.redirect('/menuView')
        } else {
          user.comparePassword(password, function(err, match) {
            if(match) {
              console.log("YOU ARE LOGGED IN. CONGRATULATIONS. I'M SO HAPPY FOR YOU.");
              var token = jwt.encode(user, 'secret');
              response.json({token: token});
            } else {
              return next(new Error("Whoops!"));
            }
          })
        }
      })
    }
=======
  }
>>>>>>> parent of 6d4fb14... [Feature] Implemented password compare function
};
