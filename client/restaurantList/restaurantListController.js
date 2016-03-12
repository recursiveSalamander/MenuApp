angular.module('menuApp')

.controller('restaurantListController', function($window, $scope, menuAppFactory) {
  $scope.data = [];

  $scope.displayRestaurants = function() {
    menuAppFactory.getRestaurantList()
    .then(function(data) {
      console.log('++line 9 inside restaurantListController searchRestaurants',data);
      data.forEach(function(value) {
        value.formatted = value.location.formattedAddress.join();
      })
      $scope.data = data;
    }).catch(function(err) {
      console.log(err);
    })
  }
  $scope.displayRestaurants();
});
