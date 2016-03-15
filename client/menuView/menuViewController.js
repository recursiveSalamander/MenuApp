angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory) {
  $scope.data;

  $scope.renderMenu = function(restaurantId){
    menuAppFactory.getMenu(restaurantId)
    .then(function(data){
      console.log('++line 8 inside menuviewcontroller', data);
      $scope.data = data;
    }).catch(function(err){
      console.log('++line 12 err inside renderMenu in menuViewController',err);
    });
  }
  // $scope.renderMenu();

});
