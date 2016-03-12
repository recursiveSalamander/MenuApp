angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory) {
  $scope.menuitems = {};
  $scope.renderMenu(restaurant){
    menuAppFactory.getMenu(restaurant);
  }
});
