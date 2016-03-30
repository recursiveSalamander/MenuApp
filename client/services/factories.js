angular.module('menuApp')

.factory('menuAppFactory', ['$http', '$location', '$state', 'Auth', function($http, $location, $state, Auth) {

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
    // console.log('++ line 92 inside ratingInfo() in factories token', currentToken);
    return $http({
      method: 'POST',
      url: '/api/profile',
      data: {currentToken: currentToken}
    })
    .then(function(res) {
    // console.log('++line 104 in getUserInfo() in factories res.data: ',res.data);
    return res.data;
  }, function(err) {
    // console.log('++line 107 in getUserInfo in factories res.data err: ',err);
  });
  };

  var ratingInfo = function(rating, entryId, restaurantId) {
    // console.log('++line 107 inside ratingInfo() in factories rating: ', rating);
    // console.log('++line 108 inside ratingInfo() in factories entryId: ', entryId);
    // console.log('++line 109 inside ratingInfo() in factories restaurantId: ', restaurantId );

    var currentToken = Auth.getToken();
    console.log('++ line 115 inside ratingInfo() in factories token',currentToken);

    return $http({
      method: 'POST',
      url: '/api/rating',
      data: {rating: rating, entryId: entryId, restaurantId: restaurantId, currentToken: currentToken}
    })
    .then(function(res) {
      return res.data;
    }, function(err) {
      console.log(err);
    });
  };

  var getRating = function(restaurantId) {
    // console.log('++line 127 in getRating() in factories restaurantId: ',restaurantId);
    var currentToken = Auth.getToken();
    console.log('++ line 132 inside ratingInfo() in factories restaurantId',restaurantId);

    return $http({
      method: 'POST',
      url: 'api/getRating',
      data: {currentToken: currentToken, restaurantId: restaurantId}
    })
    .then(function(res) {
      console.log('++line 140 post getRating in factories', res);
      return res.data;
    });
  };

    var getAvgRating = function(restaurantId) {
    console.log('++line 146 in getAvgRating() in factories restaurantId: ',restaurantId);

    return $http({
      method: 'POST',
      url: 'api/ratingsAverage',
      data: {restaurantId:restaurantId}
    })
    .then(function(response) {
      console.log('++line 154 post getRating in factories response.data: ', response.data);
      return response.data;
    }
  }

  var getRestrictions = function(menuData) {
    var currentToken = Auth.getToken();

    return $http({
      method: 'POST',
      url: '/api/restrictions',
      data: {currentToken: currentToken, menuData: menuData}
    })
    .then(function(res) {
      return res.data;
    });
  };

  return {
    getUserInfo: getUserInfo,
    ratingInfo: ratingInfo,
    getRating: getRating,
    getAvgRating: getAvgRating,
    getRestrictions: getRestrictions
  };
}])

.factory('Survey', ['$http', function($http) {
  var retrieveSurvey = function(callback) {
  $http.get('../assets/dishes.json').success(function(data) {
    callback(data);
    });
  };

  var preferencesForm = {tastePreference: {
    spicy: 1,
    meaty: 1,
    sour: 1,
    sweet: 1,
    salty: 1,
    bitter: 1
    },
   cuisinePreference: {
    american: {score: 0, eval: 0},
    italian: {score: 0, eval: 0},
    mexican: {score: 0, eval: 0},
    southern_soulfood: {score: 0, eval: 0},
    french: {score: 0, eval: 0},
    southwestern: {score: 0, eval: 0},
    indian: {score: 0, eval: 0},
    chinese: {score: 0, eval: 0},
    cajun_creole: {score: 0, eval: 0},
    english: {score: 0, eval: 0},
    mediterranean: {score: 0, eval: 0},
    greek: {score: 0, eval: 0},
    spanish: {score: 0, eval: 0},
    german: {score: 0, eval: 0},
    thai: {score: 0, eval: 0},
    moroccan: {score: 0, eval: 0},
    irish: {score: 0, eval: 0},
    japanese: {score: 0, eval: 0},
    cuban: {score: 0, eval: 0},
    hawaiian: {score: 0, eval: 0},
    swedish: {score: 0, eval: 0},
    hungarian: {score: 0, eval: 0},
    portugese: {score: 0, eval: 0}
  },
  preferredIngredients: [],
  rejectedIngredients: []
  };

  return {
    retrieveSurvey: retrieveSurvey,
    preferencesForm: preferencesForm
  };
}])

.factory('Utils', [function() {
  var createHistogram = function(arr, property) {
    var hist = {};

    _.forEach(arr, function(element) {
      _.forEach(element[property], function(item) {
        hist[item] = hist[item] + 1 || 1;
      });
    });
    return hist;
  };

  var mostFreqElements = function(obj, num) {
    var arrayified = _.map(obj, function(value, key) {
      return [key, value];
    });
    arrayified.sort(function(a, b) {
      return a[1] - b[1];
    });
    return arrayified.slice(arrayified.length - num);
  };

  var removeMatches = function(arr1, arr2) {
    var newArr1 = _.map(arr1, function(element) {
      return element[0];
    });
    var newArr2 = _.map(arr2, function(element) {
      return element[0];
    });

    var filteredArr1 = _.reject(newArr1, function (element) {
      return _.includes(element, newArr2);
    });

    var filteredArr2 = _.reject(newArr2, function (element) {
      return _.includes(element, newArr1);
    });


    return [filteredArr1, filteredArr2];
  };

  return {
    createHistogram: createHistogram,
    mostFreqElements: mostFreqElements,
    removeMatches: removeMatches
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

.factory('Preferences', ['$mdDialog', function($mdDialog) {

  // function DialogController($scope, $mdDialog) {
  //   $scope.hide = function() {
  //     $mdDialog.hide();
  //   };
  //   $scope.cancel = function() {
  //     $mdDialog.cancel();
  //   };
  //   $scope.answer = function(answer) {
  //     $mdDialog.hide(answer);
  //   };
  // }
  var hide = function() {
      $mdDialog.hide();
    };


  var showTabDialog = function(ev) {
    $mdDialog.show({
      controller: 'preferenceSurveyController',
      templateUrl: '../preferenceSurvey/preferenceSurvey.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: false
    });
    // .then(function(answer) {
    //   $scope.status = 'You said the information was "' + answer + '".';
    // }, function() {
    //   $scope.status = 'You cancelled the dialog.';
    // });
};

  return {
    showTabDialog: showTabDialog
  };


}]);
