angular.module('menuApp')

.controller('restaurantListController', function($window, $scope, menuAppFactory) {
  $scope.searchRestaurants = function(location) {
    menuAppFactory.getRestaurantList();
  }

});
