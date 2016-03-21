angular.module('menuApp')

.factory('menuAppFactory', ['$http', '$location', '$state',function($http, $location, $state) {

  var getRestaurantList = function (coordinates) {
    console.log(coordinates);
    return $http({
      method: 'POST',
      url: '/api/restaurants',
      data: coordinates
    })
    .then(function (resp) {
      console.log('++line 13 inside getRestaurantList in factories',resp);
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };

  var getMenu = function (restaurantId) {
    restaurantId = {restaurantId: restaurantId};
    console.log('++line 21 inside getMenu in factories.js',restaurantId);
    return $http({
      method: 'POST',
      url: '/api/menu',
      data: restaurantId
    })
    .then(function (resp) {
      console.log('++line 28 in post getMenu inside factories',resp);
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };
  return {
    getRestaurantList: getRestaurantList,
    getMenu: getMenu
  };
}])

.factory('Geolocation', ['$http', '$location', '$state', function($http, $location, $state) {

  var formatLatLong = function(lat, lng, callback) {
    var coordinatesInput = {
      latitude: lat,
      longitude: lng
    };
    callback(coordinatesInput);
  };

  var getLatLong = function(callback) {
    var address = document.getElementById('autocomplete').value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: address}, function(results, status){
      if (status === google.maps.GeocoderStatus.OK) {
        callback(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      }
    });
  };

  return {
    getLatLong: getLatLong,
    formatLatLong: formatLatLong
  };


}])

.factory('userInfo', ['$http', '$location', '$state', function($http, $location, $state) {
  var getUserInfo = function(user) {
    console.log('++line 72 inside userInfo in factories');
   return $http({
    method: 'GET',
    url: 'api/profile/profileView',
    data: user
   })
   .then(function(res) {
    // console.log(res.data);
    return res.data;
   });
  };
   return {
    getUserInfo: getUserInfo
   };
}])

.factory('Auth', ['$http', '$location', '$state', function($http, $location, $window) {
  var signin = function(user) {
    return $http({
      method: 'POST',
      url: 'api/users/signin',
      data: user
    })
    .then(function(res) {
      token = res.data.token;
      return res.data.token;
    });
  };

  var signup = function(user) {
    return $http ({
      method: 'POST',
      url: 'api/users/signup',
      data: user
    })
    .then(function(res) {
      return res.data.token;
    });
  };

  var getToken = function() {
    console.log('TOKEN!!!!');
    return $window.localStorage.getItem('authentication');
  };

  var isAuth = function() {
    return !!$window.localStoage.getItem('authentication');
  };

  var isSignedIn = function() {
    return isAuth();
  };

  var signout = function() {
    $window.localStorage.removeItem('authentication');
    $location.path('/signup');
  };

  return {
    signin: signin,
    getToken: getToken,
    signup: signup,
    isAuth: isAuth,
    isSignedIn: isSignedIn,
    signout: signout
  };
}]);
