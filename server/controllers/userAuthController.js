var request = require('request');
var _=require('lodash');


module.exports = {
  signup: function(request, response, next){

    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var username = req.body.username;

    new User({username: username})
      .fetch()
      .then(function(){
        if(!user){
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
