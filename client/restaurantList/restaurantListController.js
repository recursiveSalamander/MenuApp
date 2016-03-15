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

  function initMap() {
  // Create a map object and specify the DOM element for display.

    if (navigator.geolocation) {
      var thislat;
      var thislng;
      navigator.geolocation.getCurrentPosition(function(position) {
        thislat = position.coords.latitude;
        thislng = position.coords.longitude;

        var current_coords = {lat: thislat, lng: thislng};
        new google.maps.Map(document.getElementById('map'), {
          center: current_coords,
          zoom: 14
        });
        infowindow = new google.maps.InfoWindow();
      });
    }
  }

  initMap();
  // $scope.displayRestaurants();
});
