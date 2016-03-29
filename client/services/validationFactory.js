angular.module('menuApp')

.factory('ValidationFactory', function(){

  var validatePasswordAndEmail = function(email, password, secondEntryPassword) {
    var resultsObj = {};
    resultsObj.passwordFormFlag = false;
    resultsObj.emailFormFlag = false;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email)){
        resultsObj.emailFormFlag = true;
      } else {
        resultsObj.emailFormFlag = false;
      }

    if(password === secondEntryPassword){
      resultsObj.passwordFormFlag = true;
      } else {
      resultsObj.passwordFormFlag = false;
      }

    return resultsObj;
  };

  return validatePasswordAndEmail = {
    validatePasswordAndEmail: validatePasswordAndEmail
  };
});
