angular.module('menuApp')

.controller('userAuthController', function($window, $scope, Auth, $location) {

  $scope.signUp = function(){
    Auth.signup($scope.user)
      .then(function(token){
        $window.localStorage.setItem('authentication', token);
        console.log('LOOK AT YOU, SIGNING UP AND WHATNOT. WHAT A BIG BOY.');
        $location.path('/user');
      })
      .catch(function(error){
        console.log(error);
      });
    }
})
