angular.module('menuApp')

.controller('userAuthController', ['$window', '$scope', 'Auth', 'ValidationFactory', '$location', '$state',function($window, $scope, Auth, ValidationFactory, $location, $state) {

  $scope.signUp = function() {
    var validate = ValidationFactory.validatePasswordAndEmail($scope.user.email, $scope.user.password, $scope.user.confirmpassword);
    console.log($scope.user.password === $scope.user.confirmpassword);
    console.log(validate);
    if(validate.passwordFormFlag === false && validate.emailFormFlag === false) {
      swal({
        title: 'Password and/or email are not valid!',
        text: 'Please doublecheck and resubmit.',
        type: 'error',
        confirmationButtonText: 'OK'
      });
    } else if(validate.passwordFormFlag === false) {
      swal({
        title: 'Passwords do not match!',
        text: 'Please re-enter your passwords and make sure they match.',
        type: 'error',
        confirmationButtonText: 'OK'
      });
    } else if(validate.emailFormFlag === false) {
      swal({
        title: 'Invalid email!',
        text: 'Please enter a valid email address.',
        type: 'error',
        confirmationButtonText: 'OK'
      });
    } else {
    Auth.signup($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('authentication', token);
        $location.path('/user');
      })
      .catch(function(error) {
        swal({
          title: 'Username already exists!',
          text: 'Please choose a different username or sign into your account.',
          type: 'error',
          confirmationButtonText: 'OK'
        });
      });
    }
  };

  $scope.validate = function() {
    Auth.signin($scope.user)
    .then(function(token) {
      if(token === undefined) {
        swal({
          title: 'Username/password do not match!',
          text: 'Please double check your login information, or sign up for a new account.',
          type: 'error',
          confirmationButtonText: 'OK'
        });
      } else {
        $window.localStorage.setItem('authentication', token);
        $state.go('restaurantList');
      }
    });
  };


  $scope.signOut = function() {
    Auth.signout();
  };

  $scope.checkToken = function(){
    return !!$window.localStorage.getItem('authentication');
  };
}]);
