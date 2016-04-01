angular
  .module('menuApp')

  .factory('ValidationFactory', function() {

  var validatePasswordAndEmail = function(email, password, secondEntryPassword) {
    var resultsObj = {};
    resultsObj.passwordFormFlag = false;
    resultsObj.emailFormFlag = false;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email)){
        resultsObj.emailFormFlag = true;
      } else {
        resultsObj.emailFormFlag = false;
      }

    if(password === secondEntryPassword){
      resultsObj.passwordFormFlag = true;
      } else {
      resultsObj.passwordFormFlag = false;
      }

    return resultsObj;

  };

  return validatePasswordAndEmail = {
    validatePasswordAndEmail: validatePasswordAndEmail
  };
})

.factory('menuAppFactory', ['$http', '$location', '$state', 'Auth', function($http, $location, $state, Auth) {

  var currentToken = Auth.getToken();

  var getRestaurantList = function(coordinates) {
    return $http({
      method: 'POST',
      url: '/api/restaurants',
      data: coordinates
    })
    .then(function(resp) {
      return resp.data;
    }, function(error) {
      console.log(error);
    });
  };

    var getRestaurantList = function(coordinates) {
      return $http({
        method: 'POST',
        url: '/api/restaurants',
        data: coordinates
      })
      .then(function(resp) {
        return resp.data;
      }, function(error) {
        console.log(error);
      });
    };

    var getMenu = function(restaurantId, restaurantName) {
      restaurantId = {restaurantId: restaurantId};
      return $http({
        method: 'POST',
        url: '/api/menu',
        data: restaurantId
      })
      .then(function(resp) {
        resp.data[0].entries.items.restaurantName = restaurantName;
        return resp.data;
      }, function(error) {
        console.log(error);
      });
    };

    var postUserPreference = function(preferences) {
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

    var getUserPreference = function(userID) {
      return $http({
        method: 'POST',
        url: '/api/getPreferences',
        data: userID
      })
      .then(function(resp) {
        return resp.data;
      }, function (error) {
        console.log(error);
      }
    }


    return {
      getRestaurantList: getRestaurantList,
      getMenu: getMenu,
      postUserPreference: postUserPreference,
      getUserPreference: getUserPreference
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
    var currentToken = Auth.getToken();
    return $http({
      method: 'POST',
      url: '/api/profile',
      data: {currentToken: currentToken}
    })
    .then(function(res) {
    return res.data;
  }, function(err) {
  });
  };

  var ratingInfo = function(rating, entryId, restaurantId) {

    var currentToken = Auth.getToken();

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
    var currentToken = Auth.getToken();

    return $http({
      method: 'POST',
      url: 'api/getRating',
      data: {currentToken: currentToken, restaurantId: restaurantId}
    })
    .then(function(res) {
      return res.data;
    });
  };

  var getAvgRating = function(restaurantId) {

    return $http({
      method: 'POST',
      url: 'api/ratingsAverage',
      data: {restaurantId:restaurantId}
    })
    .then(function(response) {
      return response.data;
    });
  };

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
      american: {score: 0, eval: 1},
      italian: {score: 0, eval: 1},
      mexican: {score: 0, eval: 1},
      southern_soulfood: {score: 0, eval: 1},
      french: {score: 0, eval: 1},
      southwestern: {score: 0, eval: 1},
      indian: {score: 0, eval: 1},
      chinese: {score: 0, eval: 1},
      cajun_creole: {score: 0, eval: 1},
      english: {score: 0, eval: 1},
      mediterranean: {score: 0, eval: 1},
      greek: {score: 0, eval: 1},
      spanish: {score: 0, eval: 1},
      german: {score: 0, eval: 1},
      thai: {score: 0, eval: 1},
      moroccan: {score: 0, eval: 1},
      irish: {score: 0, eval: 1},
      japanese: {score: 0, eval: 1},
      cuban: {score: 0, eval: 1},
      hawaiian: {score: 0, eval: 1},
      swedish: {score: 0, eval: 1},
      hungarian: {score: 0, eval: 1},
      portugese: {score: 0, eval: 1}
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

      var filteredArr1 = _.reject(newArr1, function(element) {
        return _.includes(element, newArr2);
      });

      var filteredArr2 = _.reject(newArr2, function(element) {
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

  .factory('Auth', ['$http', '$location', '$state', '$window', '$mdDialog', function($http, $location, $state, $window, $mdDialog) {
    var showSignInDialog = function() {
      $mdDialog.show({
        controller: 'userAuthController',
        templateUrl: '../userAuth/hello.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
      });
    }

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
        if (res) {
          return res.data.token;
        } else {
          console.log('error');
          $state.go('signup');
        }
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
      console.log(token);
      $window.localStorage.removeItem('authentication');
    };

    return {
      signin: signin,
      getToken: getToken,
      signup: signup,
      isAuth: isAuth,
      isSignedIn: isSignedIn,
      signout: signout,
      showSignInDialog: showSignInDialog
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
    };



    return {
      showTabDialog: showTabDialog
    };
  }]);
