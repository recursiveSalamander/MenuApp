angular.module('menuApp')

.controller('restaurantListController', ['$window', '$scope', '$state', 'menuAppFactory', 'Geolocation', 'Auth', 'userInfo', function($window, $scope, $state, menuAppFactory, Geolocation, Auth, userInfo) {
  $scope.data = [];
  $scope.map;
  $scope.checkToken = function(){
    return Auth.isAuth();
  };

  var infoWindow;
  var markers = [];
  var makeMap = function(current_coords) {
    $scope.map = new google.maps.Map(document.getElementById('map'), {
      center: current_coords,
      scrollwheel: false,
      zoom: 17
    });
    markers.push(new google.maps.Marker({
      position: current_coords,
      map: $scope.map,
      title: 'hello'
    }));

    };

  var addMarkerWithTimeout = function (position) {



  };

  var clearMarkers = function (callback) {
    console.log('inside clearmarkers MARKERS', markers);
    for (var i = 0; i < markers.length; i++) {
      if(markers[i].Pb)
      markers[i].Pb.setMap(null);
      else markers[i].setMap(null);
    }
    markers = [];
  };



  var refocusMapBounds = function () {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
     bounds.extend(markers[i].getPosition());
    }

    $scope.map.fitBounds(bounds);
  };

  var makeInfoWindow = function (marker, restaurantName) {
    marker.addListener('click', function(){
      if(infoWindow){
        infoWindow.close();
      }

        infoWindow = new google.maps.InfoWindow({
           content: restaurantName
         });
         infoWindow.open($scope.map, this);


    });
  };


  function toggleBounce() {
    for(var i=0; i<markers.length; i++){
      if (markers[i].getAnimation() !== null) {
        markers[i].setAnimation(null);
      }
    }
    this.setAnimation(google.maps.Animation.BOUNCE);

}
  // data.forEach(function(restaurant) {
  //   restaurant.formatted = restaurant.location.formattedAddress.join();
  //   var LatLng = {lat: restaurant.location.lat, lng: restaurant.location.lng};
  //
  //   var infoWindow = new google.maps.InfoWindow({
  //     content: restaurant.name
  //   })
  //   addMarkerWithTimeout(LatLng, 0);
  //   console.log(markers);
  //
  //   // markers[].addListener('click', function(){
  //   //   infoWindow.open($scope.map, marker);
  //   // })
  // });




  $scope.displayRestaurants = function() {
    clearMarkers();
    Geolocation.getLatLong(function(lat, lng) {
      Geolocation.formatLatLong(lat, lng, function(coords) {
        menuAppFactory.getRestaurantList(coords)
        .then(function(data) {
          for(var i=0; i< data.length; i++){
            data[i].formatted = data[i].location.formattedAddress.join();
            console.log('djfoidjfiosjdoifsajoifjiosadfo',data[i].name);
            var restaurantName = data[i].name;
            var LatLng = {lat: data[i].location.lat, lng: data[i].location.lng};
            var marker = new google.maps.Marker({
              position: LatLng,
              map: $scope.map,
              animation: google.maps.Animation.DROP
            });
            marker.addListener('click', toggleBounce);
            console.log('++line 113 in displayRestaurants() in restListCtrl');
            makeInfoWindow(marker, restaurantName);
            markers.push(marker);



            //SETTIMEOUT HELP PLS
          }
          $scope.data = data;
          console.log('hhriereirheirererere',markers);
          window.setTimeout(refocusMapBounds(),200);

          //FIX THIS TOO

        })
        .catch(function(err) {
          console.log(err);
        });
      });

    });
  };

  $scope.restaurantMenu = function(restaurantId, restaurantName) {
    console.log('++line 137 inside restaurantMenu() in restListCtrl restaurantId: ',restaurantId);
    console.log('++line 138 inside restaurantMenu() in restListCtrl restaurantName: ',restaurantName);
    $scope.restaurantId = restaurantId;
    menuAppFactory.getMenu(restaurantId, restaurantName)
    .then(function(data) {
      console.log('++line 142 inside restaurantMenu() in restListCtrl restaurantId:', restaurantId);
      console.log('++line 143 inside restaurantMenu() in restListCtrl data:', data);
      userInfo.getRating()
      .then(function(ratingData) {
        console.log('++line 146 post getRating() in restListCtrl ratingData: ',ratingData);
        console.log('++line 147 post getRating() in restListCtrl data[0].entries.items: ',data[0].entries.items);
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
          console.log('++line 159 in restaurantMenu() in restListCtrl data: ',data[0].entries.items.restaurantName);
          $state.go('menuView', {menuData: data[0].entries.items, restaurantId: restaurantId, restaurantName: data[0].entries.items.restaurantName});
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
    console.log('place', place);
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



  }
}

initMap();
}]);