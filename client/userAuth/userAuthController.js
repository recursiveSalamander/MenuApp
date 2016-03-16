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

  $scope.signIn = function(){
    Auth.signin($scope.user)
    .then(function(token){
      if(token === undefined){
        console.log('INCORRECT LOGIN');
      } else {
        $window.localStorage.setItem('authentication', token);
        console.log('SUCCESS!!!!');
      }
    })
  }

})
