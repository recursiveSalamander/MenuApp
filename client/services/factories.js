angular.module('menuApp')

.factory('menuAppFactory', ['$http', '$location', '$state',function($http, $location, $state) {

  var getRestaurantList = function (coordinates) {
    console.log('++line 6 in getRestaurantList() in factories coordinates: ',coordinates);
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
    console.log('++line 22 inside getMenu in factories.js',restaurantId);
    return $http({
      method: 'POST',
      url: '/api/menu',
      data: restaurantId
    })
    .then(function (resp) {
      console.log('++line 29 in post getMenu inside factories',resp.data);
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };

  var postUserPreference = function (preferences) {
    console.log('++line 37 inside postUserPreferences() in menuAppFactory');
    return $http({
      method: 'POST',
      url: '/api/preference',
      data: preferences
    })
    .then(function (resp) {
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

  var formatLatLong = function (lat, lng, callback) {
    var coordinatesInput = {
      latitude: lat,
      longitude: lng
    };
    callback(coordinatesInput);
  };

  var getLatLong = function (callback) {
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
  var getUserInfo = function(user) {
    // console.log('++line 90 inside userInfo() in factories user:', user);
    var currentToken = Auth.getToken();
    console.log('++ line 92 inside ratingInfo() in factories token',currentToken);
    return $http({
      method: 'GET',
      url: 'api/profile',
      data: currentToken
    })
    .then(function(res) {
    // console.log(res.data);
    return res.data;
  }, function(err) {
    console.log(err);
  });
  };

  var ratingInfo = function(rating, entryId, restaurantId) {
    console.log('++line 107 inside ratingInfo() in factories rating: ', rating);
    console.log('++line 108 inside ratingInfo() in factories entryId: ', entryId);
    console.log('++line 109 inside ratingInfo() in factories restaurantId: ', restaurantId );

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

  var getRating = function(restaurantId) {
    console.log('++line 127 in getRating() in factories restaurantId: ',restaurantId);
    var currentToken = Auth.getToken();
    console.log('++ line 129 inside ratingInfo() in factories token',currentToken);

    return $http({
      method: 'POST',
      url: 'api/getRating',
      data: {currentToken: currentToken, restaurantId: restaurantId}
    })
    .then(function(res) {
      console.log('++line 137 post getRating in factories', res);
      return res.data;
    }), function(err) {
      console.log(err);
    };
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
    console.log('TOKEN!!!!');
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
}]);
