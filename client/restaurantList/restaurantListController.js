angular.module('menuApp')

.controller('restaurantListController', function($window, $scope, menuAppFactory) {
  $scope.data = [];

  $scope.searchRestaurants = function() {
    menuAppFactory.getRestaurantList()
    .then(function(data) {
      console.log('++line 9 inside restaurantListController searchRestaurants',data);
      $scope.data = data;
    }).catch(function(err) {
      console.log(err);
    })
  }
  $scope.searchRestaurants();
});
