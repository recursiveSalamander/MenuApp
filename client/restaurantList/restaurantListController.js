angular
  .module('menuApp')
  .controller('restaurantListController', ['$window', '$scope', '$state', 'menuAppFactory', 'Geolocation', 'Auth', 'userInfo', 'Preferences', function($window, $scope, $state, menuAppFactory, Geolocation, Auth, userInfo, Preferences) {
    $scope.data = [];
    $scope.map;

    $scope.checkToken = function() {
      return Auth.isAuth();
    };

    $scope.signOut = function() {
      Auth.signout();
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
        title: 'You may be here'
      }));
    };

    var clearMarkers = function(callback) {
      console.log('inside clearmarkers MARKERS', markers);
      for (var i = 0; i < markers.length; i++) {
        if(markers[i].Pb)
          markers[i].Pb.setMap(null);
        else markers[i].setMap(null);
      }
      markers = [];
    };

    var refocusMapBounds = function() {
      var bounds = new google.maps.LatLngBounds();
      for (var i = 0; i < markers.length; i++) {
       bounds.extend(markers[i].getPosition());
     }

     $scope.map.fitBounds(bounds);
   };

   var makeInfoWindow = function(marker, restaurantName) {
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
    $scope.contentLoading = false;
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
            var markerlabel = (i+1).toString();
            data[i].index = (i+1).toString();
            markerlabel.length === 2 ? markerlabel = markerlabel : markerlabel = '0' + markerlabel;
            var restaurantName = data[i].name;
            var LatLng = {lat: data[i].location.lat, lng: data[i].location.lng};
            var marker = new google.maps.Marker({
              position: LatLng,
              map: $scope.map,
              // label: markerlabel.toString(),
              // icon: "http://maps.google.com/mapfiles/marker" + 'A' + ".png",
              icon: 'http://google-maps-icons.googlecode.com/files/red' + markerlabel + '.png',
              animation: google.maps.Animation.DROP
            });
            marker.addListener('click', toggleBounce);
            makeInfoWindow(marker, restaurantName);
            markers.push(marker);
            //SETTIMEOUT HELP PLS
          }

          $scope.data = data;
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
    console.log('++line 135 inside restaurantMenu() in restListCtrl restaurantId: ',restaurantId);
    console.log('++line 136 inside restaurantMenu() in restListCtrl restaurantName: ',restaurantName);
    $scope.restaurantId = restaurantId;
    menuAppFactory.getMenu(restaurantId)
    .then(function(data) {
      console.log('++line 140 inside restaurantMenu() in restListCtrl restaurantId:', restaurantId);
      console.log('++line 141 inside restaurantMenu() in restListCtrl data:', data);
      userInfo.getRating(restaurantId)
      .then(function(ratingData) {
        userInfo.getRestrictions(data[0].entries.items)
        .then(function(restrictionData) {
          console.log('++line 144 post getRating() in restListCtrl ratingData: ',ratingData);
          console.log('++line 145 post getRating() in restListCtrl data[0].entries.items: ',data[0].entries.items);
          if (ratingData !== undefined) {
            for (var k = 0; k < data[0].entries.items.length; k++) {
              var menuItems = data[0].entries.items[k].entries.items;
              for (var i = 0; i < ratingData.length; i++) {
                for (var j = 0; j < menuItems.length; j++) {
                  if (ratingData[i].entryId === menuItems[j].entryId) {
                    menuItems[j].ratingInfo = ratingData[i].rating;
                    menuItems[j].avgRating = ratingData[i].avgRating;
                  }
                }
              }
            }
            $state.go('menuView', {menuData: data[0].entries.items, restaurantId: restaurantId, restaurantName: restaurantName});
          } else {
           $state.go('menuView', {menuData: data[0].entries.items, restaurantId: restaurantId});
         }
       });
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
$scope.contentLoading = true;
}]);
