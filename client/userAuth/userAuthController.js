angular.module('menuApp')

.controller('userAuthController', ['$window', '$scope', 'Auth', '$location', '$state',function($window, $scope, Auth, $location, $state) {

  $scope.signUp = function() {
    Auth.signup($scope.user)
    .then(function(token) {
      $window.localStorage.setItem('authentication', token);
      console.log('LOOK AT YOU, SIGNING UP AND WHATNOT. WHAT A BIG BOY.');
      $location.path('/user');
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  $scope.validate = function() {
    Auth.signin($scope.user)
    .then(function(token) {
      if(token === undefined) {
        console.log('INCORRECT LOGIN');
      } else {
        $window.localStorage.setItem('authentication', token);
        console.log('SUCCESS!!!!');
        $state.go('restaurantList');
      }
    });
  };

  $scope.signOut = function() {
    Auth.signout();
  };

  $scope.checkToken = function(){
    return !!$window.localStorage.getItem('authentication');
  }
}]);
