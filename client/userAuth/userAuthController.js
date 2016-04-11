angular
  .module('menuApp')
  .controller('userAuthController', ['$window', '$scope', 'Auth', 'ValidationFactory', '$location', '$state', 'Preferences', '$mdDialog', function($window, $scope, Auth, ValidationFactory, $location, $state, Preferences, $mdDialog) {
    $scope.signinModal = function() {
      Auth.showSignInDialog();
    };


    $scope.signUp = function() {
      var validate = ValidationFactory.validatePasswordAndEmail($scope.user.email, $scope.user.password, $scope.user.confirmpassword);
      if(validate.passwordFormFlag === false && validate.emailFormFlag === false) {
        swal({
          title: '',
          text: 'Password and/or email are not valid! Please doublecheck and resubmit.',
          type: 'error',
          confirmationButtonText: 'OK'
        });
      } else if(validate.passwordFormFlag === false) {
        swal({
          title: '',
          text: 'Passwords do not match! Please re-enter your passwords and make sure they match.',
          type: 'error',
          confirmationButtonText: 'OK'
        });
      } else if(validate.emailFormFlag === false) {
        swal({
          title: '',
          text: 'Invalid email! Please enter a valid email address.',
          type: 'error',
          confirmationButtonText: 'OK'
        });
      } else {
        Auth.signup($scope.user)
        .then(function(token) {
          $window.localStorage.setItem('authentication', token);
          $state.go('surveyProfileView');
          Preferences.showTabDialog();
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
            title: '',
            text: 'Username does not exist!',
            type: 'error',
            confirmationButtonText: 'OK'
          });
          $location.path('/signIn');
        } else {
          $mdDialog.hide();
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
