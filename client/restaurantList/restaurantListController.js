angular.module('menuApp')

.controller('restaurantListController', ['$window', '$scope', '$state', 'menuAppFactory',function($window, $scope, $state, menuAppFactory) {
  $scope.data = [];

  $scope.displayRestaurants = function() {
    $scope.getLatLong();
    var coordinatesInput = {
      latitude: $scope.latitude,
      longitude: $scope.longitude
    }

    menuAppFactory.getRestaurantList(coordinatesInput)
    .then(function(data) {
      console.log('++line 9 inside restaurantListController searchRestaurants',data);
      data.forEach(function(value) {
        value.formatted = value.location.formattedAddress.join();
      })
      $scope.data = data;
    })
    .catch(function(err) {
      console.log(err);
    });


  }

  $scope.getLatLong = function() {
    var address = document.getElementById('autocomplete').value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        $scope.latitude = results[0].geometry.location.lat();
        $scope.longitude = results[0].geometry.location.lng();
      }
    });

  }

  $scope.restaurantMenu = function(restaurantId) {
    console.log('++line 42 inside restaurantMenu() in restaurantListCtrl',restaurantId);
    $scope.restaurantId = restaurantId
      $state.go('menuView', {'restaurantId': $scope.restaurantId});
    menuAppFactory.getMenu(restaurantId)
    .then(function(data) {
      console.log('++line 45 inside restaurantMenu() in restaurantListCtrl', data);
      $state.go('menuView', {menuData: data})
    })
  }

  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("autocomplete")),
    {types: ["geocode"]});


  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if(!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
    if (place.geometry.viewport) {
      $scope.map.fitBounds(place.geometry.viewport);
    } else {
      $scope.map.setCenter(place.geometry.location);

  $scope.map.setZoom(17);  // Why 17? Because it looks good.
}
})
  function initMap() {
// Create a map object and specify the DOM element for display.

if (navigator.geolocation) {
  var thislat;
  var thislng;
  navigator.geolocation.getCurrentPosition(function(position) {
    thislat = position.coords.latitude;
    thislng = position.coords.longitude;


    var current_coords = {lat: thislat, lng: thislng};
    makeMap(current_coords);
  });

  var makeMap = function(current_coords) {
    $scope.map = new google.maps.Map(document.getElementById('map'), {
      center: current_coords,
      scrollwheel: false,
      zoom: 14
    });
  }

}



}

// $scope.displayRestaurants();
initMap();
}]);
