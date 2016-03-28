angular.module('menuApp')

.factory('menuAppFactory', ['$http', '$location', '$state', 'Auth',function($http, $location, $state, Auth) {

  var currentToken = Auth.getToken();

  var getRestaurantList = function(coordinates) {
    console.log('++line 8 in getRestaurantList() in factories coordinates: ',coordinates);
    return $http({
      method: 'POST',
      url: '/api/restaurants',
      data: coordinates
    })
    .then(function(resp) {
      console.log('++line 15 inside getRestaurantList in factories',resp);
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };

  var getMenu = function(restaurantId, restaurantName) {
    restaurantId = {restaurantId: restaurantId};
    console.log('++line 24 inside getMenu in factories.js',restaurantId);
    return $http({
      method: 'POST',
      url: '/api/menu',
      data: restaurantId
    })
    .then(function(resp) {
      console.log('++line 31 in post getMenu() inside factories resp.data: ',resp.data);
      resp.data[0].entries.items.restaurantName = restaurantName;
      console.log('++line 33 inside getMenu() in factories resp.data[0].entries.items.restaurantName: ',resp.data[0].entries.items.restaurantName);
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };

  var postUserPreference = function (preferences) {
    preferences.token = currentToken;

    return $http({
      method: 'POST',
      url: '/api/preference',
      data: preferences
    })
    .then(function(resp) {
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };


  return {
    getRestaurantList: getRestaurantList,
    getMenu: getMenu,
    postUserPreference: postUserPreference
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

    geocoder.geocode({address: address}, function(results, status) {
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


.factory('userInfo', ['$http', '$location', '$state', '$window', 'Auth', function($http, $location, $state, $window, Auth) {
  var getUserInfo = function() {
    // console.log('++line 90 inside userInfo() in factories user:', user);
    var currentToken = Auth.getToken();
    console.log('++ line 92 inside ratingInfo() in factories token', currentToken);
    return $http({
      method: 'POST',
      url: '/api/profile',
      data: {currentToken: currentToken}
    })
    .then(function(res) {
    // console.log(res.data);
    return res.data;
  }, function(err) {
    console.log(err);
  });
  };

  var ratingInfo = function(rating, entryId, restaurantId) {
    // console.log('++line 107 inside ratingInfo() in factories rating: ', rating);
    // console.log('++line 108 inside ratingInfo() in factories entryId: ', entryId);
    // console.log('++line 109 inside ratingInfo() in factories restaurantId: ', restaurantId );

    var currentToken = Auth.getToken();
    console.log('++ line 112 inside ratingInfo() in factories token',currentToken);

    return $http({
      method: 'POST',
      url: 'api/rating',
      data: {rating: rating, entryId: entryId, restaurantId: restaurantId, currentToken: currentToken}
    })
    .then(function(res) {
      return res.data;
    }, function(err) {
      console.log(err);
    });
  };

  var getRating = function() {
    // console.log('++line 127 in getRating() in factories restaurantId: ',restaurantId);
    var currentToken = Auth.getToken();
    console.log('++ line 129 inside ratingInfo() in factories token',currentToken);

    return $http({
      method: 'POST',
      url: 'api/getRating',
      data: {currentToken: currentToken}
    })
    .then(function(res) {
      console.log('++line 137 post getRating in factories', res);
      return res.data;
    });
  };
  return {
    getUserInfo: getUserInfo,
    ratingInfo: ratingInfo,
    getRating: getRating
  };
}])

.factory('Auth', ['$http', '$location', '$state', '$window', function($http, $location, $state, $window) {
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
    return $window.localStorage.getItem('authentication');
  };

  var isAuth = function() {
    return !!$window.localStorage.getItem('authentication');
  };

  var isSignedIn = function() {
    return isAuth();
  };

  var signout = function() {
    $window.localStorage.removeItem('authentication');
  };

  return {
    signin: signin,
    getToken: getToken,
    signup: signup,
    isAuth: isAuth,
    isSignedIn: isSignedIn,
    signout: signout
  };
}])

.factory('Navbar', ['$state', function($state) {

  var formatLatLong = function(lat, lng, callback) {
  };

  return {
    getLatLong: getLatLong,
    formatLatLong: formatLatLong
  };


}]);
