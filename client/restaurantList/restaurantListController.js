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

  $scope.locationInfo = function(){
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      console.log('++line 25 inside locationInfo in restaurantListCtrl',$scope.userLocation);
    })
  }

  $scope.getMenu = function() {
    console.log('Menu');
  }

  $scope.displayRestaurants();
});

