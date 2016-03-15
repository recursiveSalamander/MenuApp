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
    })
    .then(function(){
      $scope.getLatLong();
    })
    .catch(function(err) {
      console.log(err);
    });


  }



  $scope.getLatLong = function() {
    var address = document.getElementById('autocomplete').value;
    var geocoder = new google.maps.Geocoder();
    console.log('HIII');
    geocoder.geocode({address: address}, function(results, status){
      console.log(results[0].geometry);
      $scope.latitude = results[0].geometry.location.lat();
      $scope.longitude = results[0].geometry.location.lng();
    })

  }


  $scope.getMenu = function(restaurantId) {
    // $state.go('menuView');
    console.log('++line 31 inside getMenu function in restaurantListCtrl',restaurantId);
    menuAppFactory.getMenu(restaurantId)
    .then($state.go('menuView'))
  }





  var autocomplete = new google.maps.places.Autocomplete(
    (document.getElementById("autocomplete")),
    {types: ["geocode"]});


  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    if(!place.geometry){
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

      var makeMap = function(current_coords){
        $scope.map = new google.maps.Map(document.getElementById('map'), {
          center: current_coords,
          scrollwheel: false,
          zoom: 14
        });
      }

    }



  }

  initMap();
  // $scope.displayRestaurants();
});
