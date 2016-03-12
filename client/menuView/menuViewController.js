angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory) {
  $scope.menuItems = {};
  $scope.renderMenu = function(){
    menuAppFactory.getMenu();
  }


  $scope.renderMenu();
});
