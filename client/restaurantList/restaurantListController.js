angular.module('menuApp')

.controller('restaurantListController', function($window, $scope, $state, menuAppFactory) {
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

  $scope.getMenu = function(restaurantId) {
    // $state.go('menuView');
    console.log('++line 31 inside getMenu function in restaurantListCtrl',restaurantId);
    menuAppFactory.getMenu(restaurantId)
    .then($state.go('menuView'))
  }

  $scope.autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("autocomplete")),
    {types: ["geocode"]});

  $scope.getLatLong = function() {
    var address = document.getElementById('autocomplete').value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, function(results, status){
      $scope.latitude = results[0].geometry.location.lat();
      $scope.longitude = results[0].geometry.location.long();
    })

  }

  // $scope.displayRestaurants();
});
