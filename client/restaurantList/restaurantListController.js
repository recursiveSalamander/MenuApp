angular.module('menuApp')

.controller('restaurantListController', ['$window', '$scope', '$state', 'menuAppFactory', 'Geolocation', 'Auth', 'userInfo', function($window, $scope, $state, menuAppFactory, Geolocation, Auth, userInfo) {
  $scope.data = [];
  $scope.checkToken = function(){
    return Auth.isAuth();
  }


  $scope.displayRestaurants = function() {
    Geolocation.getLatLong(function(lat, lng) {
      Geolocation.formatLatLong(lat, lng, function(coords) {
        menuAppFactory.getRestaurantList(coords)
        .then(function(data) {
          console.log(data);
          data.forEach(function(value) {
            value.formatted = value.location.formattedAddress.join();
            var LatLng = {lat: value.location.lat, lng: value.location.lng};
            var infoWindow = new google.maps.InfoWindow({
              content: value.name
            })
            var marker = new google.maps.Marker({
              position: LatLng,
              map: $scope.map,
              title: 'restaurant'
            });
            marker.addListener('click', function(){
              infoWindow.open($scope.map, marker);
            })
          });
          $scope.data = data;
        })
        .catch(function(err) {
          console.log(err);
        });
      });
    });
  };


  $scope.restaurantMenu = function(restaurantId) {
    console.log('++line 28 inside restaurantMenu() in restaurantListCtrl',restaurantId);
    $scope.restaurantId = restaurantId;
    // $state.go('menuView', {'restaurantId': $scope.restaurantId});
    menuAppFactory.getMenu(restaurantId)
    .then(function(data) {
      console.log('++line 33 inside restaurantMenu() in restaurantListCtrl restaurantId:', restaurantId);
      console.log('++line 34 inside restaurantMenu() in restaurantListCtrl data:', data);
      userInfo.getRating()
      .then(function(ratingData) {
        console.log('++line 37 post getRating() in restListCtrl ratingData: ',ratingData);
        console.log('++line 38 post getRating() in restListCtrl data[0].entries.items: ',data[0].entries.items);
        if (ratingData !== undefined) {
          for (var k = 0; k < data[0].entries.items.length; k++) {
            var menuItems = data[0].entries.items[k].entries.items;
            for (var i = 0; i < ratingData.length; i++) {
              for (var j = 0; j < menuItems.length; j++) {
                if (ratingData[i].entryId === menuItems[j].entryId) {
                  menuItems[j].ratingInfo = ratingData[i].rating;
                }
              }
            }
          }
          console.log('++line 50 in restaurantMenu() in restListCtrl data: ',data);
          $state.go('menuView', {menuData: data[0].entries.items, restaurantId: restaurantId});
        } else {
         $state.go('menuView', {menuData: data[0].entries.items, restaurantId: restaurantId});
       }
     });
    });
  };

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

$scope.displayRestaurants();
});

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
    $scope.marker = new google.maps.Marker({
      position: current_coords,
      map: $scope.map,
      title: 'hello'
      })
    };

  }
}

initMap();
}]);
