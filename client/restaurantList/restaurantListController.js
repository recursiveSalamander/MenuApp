angular
  .module('menuApp')
  .controller('restaurantListController', ['$window', '$scope', '$state', 'Geolocation', 'Auth', 'userInfo', 'Preferences', function($window, $scope, $state, Geolocation, Auth, userInfo, Preferences) {
    $scope.data = [];
    $scope.map;
    var infoWindow;
    var infoWindows = [];
    var markers = [];

    $scope.checkToken = function() {
      return Auth.isAuth();
    };

    $scope.signOut = function() {
      Auth.signout();
    };

    $scope.highlightMarkers = function(index, restaurant) {
      if(infoWindow){
        infoWindow.close();
      }
      var infoWindowInformation = '';
      if(restaurant.photos) infoWindowInformation += '<br>' + restaurant.photos;
      if(restaurant.categories[0].icon) infoWindowInformation += "<br><img src='" + restaurant.categories[0].icon.prefix + "bg_32" + restaurant.categories[0].icon.suffix + "' height='16' width='16'>"
      if(restaurant.categories[0].shortName) infoWindowInformation += ' ' + restaurant.categories[0].shortName;
      if(restaurant.location.distance) infoWindowInformation += '<br>Distance: ' + (restaurant.location.distance*0.000621371).toFixed(2) + 'miles';
      if(restaurant.delivery) infoWindowInformation += '<br>Delivery: ' + restaurant.delivery.url;
      if(restaurant.hours) infoWindowInformation += '<br>Hours: ' + restaurant.hours;

      markers[index].setAnimation(google.maps.Animation.BOUNCE);
      infoWindow = new google.maps.InfoWindow({
       content: '<strong>' + restaurant.name + '</strong>' + infoWindowInformation
     });
      infoWindow.open($scope.map, markers[index]);
    }

    $scope.unhighlightMarkers = function(index) {
      markers[index].setAnimation(null);
      infoWindow.close();

    }


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


   var makeInfoWindow = function(marker, data) {
    var infoWindowInformation = '';
    console.log('INFOWINDOW SHIT', data);

    if(data.photos) infoWindowInformation += '<br>' + data.photos;
    if(data.categoryicon) infoWindowInformation += "<br><img src='" + data.categoryicon + "' height='16' width='16'>"
    if(data.category) infoWindowInformation += ' ' + data.category;
    if(data.distance) infoWindowInformation += '<br>Distance: ' + (data.distance*0.000621371).toFixed(2) + 'miles';
    if(data.delivery_url) infoWindowInformation += '<br>Delivery: ' + data.delivery_url;
    if(data.hours) infoWindowInformation += '<br>Hours: ' + data.hours;


    marker.addListener('click', function(){
      if(infoWindow){
        infoWindow.close();
        for(var i=0; i<markers.length; i++){
          if (markers[i].getAnimation() !== null) {
            markers[i].setAnimation(null);
          }
        }
      }
      infoWindow = new google.maps.InfoWindow({
       content: '<strong>' + data.restaurantName + '</strong>' + infoWindowInformation

     });
      infoWindow.open($scope.map, this);
    });
  };

  var toggleBounce = function() {
    for(var i=0; i<markers.length; i++){
      if (markers[i].getAnimation() !== null) {
        markers[i].setAnimation(null);
      }
    }
    this.setAnimation(google.maps.Animation.BOUNCE);
    $scope.contentLoading = false;
  }

  $scope.displayRestaurants = function() {
    clearMarkers();
    Geolocation.getLatLong(function(lat, lng) {
      Geolocation.formatLatLong(lat, lng, function(coords) {
        menuAppFactory.getRestaurantList(coords)
        .then(function(data) {
          for(var i=0; i< data.length; i++){
            data[i].formatted = data[i].location.formattedAddress.join(' ');
            var markerlabel = (i+1).toString();
            data[i].index = (i+1).toString();
            markerlabel.length === 2 ? markerlabel = markerlabel : markerlabel = '0' + markerlabel;
            var LatLng = {lat: data[i].location.lat, lng: data[i].location.lng};
            var marker = new google.maps.Marker({
              position: LatLng,
              map: $scope.map,
              icon: 'http://google-maps-icons.googlecode.com/files/red' + markerlabel + '.png',
              animation: google.maps.Animation.DROP
            });
            var infoWindowData = {};
            infoWindowData.restaurantName = data[i].name;
            if(data[i].categories[0].shortName) infoWindowData.category = data[i].categories[0].shortName;
             if(data[i].categories[0].icon) infoWindowData.categoryicon = data[i].categories[0].icon.prefix + "bg_32" + data[i].categories[0].icon.suffix;
             if(data[i].location.distance) infoWindowData.distance = data[i].location.distance;
             if(data[i].delivery) infoWindowData.delivery_url = data[i].delivery.url;
             if(data[i].hours) infoWindowData.hours = data[i].hours;
             if(data[i].photos) infoWindowData.photos = data[i].photos;
            marker.addListener('click', toggleBounce);
            makeInfoWindow(marker, infoWindowData);
            markers.push(marker);
            //SETTIMEOUT HELP PLS
          }
          $scope.data = data;
          window.setTimeout(refocusMapBounds(),1000);
          //FIX THIS TOO


        })
        .catch(function(err) {
          console.log(err);
        });
      });

    });
  };

  $scope.restaurantMenu = function(restaurantId, restaurantName) {
    $scope.restaurantId = restaurantId;
    menuAppFactory.getMenu(restaurantId)
    .then(function(data) {
      userInfo.getRating(restaurantId)
      .then(function(ratingData) {
        userInfo.getRestrictions(data[0].entries.items)
        .then(function(restrictionData) {
          data[0].entries.items = restrictionData;
          console.log('THIS IS DATA', data[0]);
          console.log('THIS IS RESTRICTIonDATA', restrictionData);
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
