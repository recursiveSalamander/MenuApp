angular.module('menuApp')

.factory('menuAppFactory', function($http, $location) {

  var getRestaurantList = function (coordinates) {
    console.log(coordinates);
    return $http({
      method: 'POST',
      url: '/api/restaurants',
      data: coordinates
    })
    .then(function (resp) {
      console.log('++line 12 inside getRestaurantList in factories',resp);
      return resp.data;
    }, function(error){
      console.log(error);
    })
  }

  var getMenu = function (restaurant) {
    console.log('++line18 inside getMenu in factories.js',restaurant);
    return $http({
      method: 'POST',
      url: '/api/menu',
      data: {restaurant: restaurant}
    })
    .then(function (resp) {
      console.log('++line 25 in post getMenu inside factories',resp.data);
      return resp.data;
    })
  }
  return {
    getRestaurantList: getRestaurantList,
    getMenu: getMenu
  };
})


.factory('Auth', function($http, $location, $window){
  var signin = function(user){
    return $http({
      method: 'POST',
      url: 'api/users/signin',
      data: user
    })
    .then(function(res){
      token = res.data.token;
      return res.data.token;
    });
  };

  var signup = function(user){
    return $http ({
      method: 'POST',
      url: 'api/users/signup',
      data: user
    })
    .then(function(res){
      return res.data.token;
    });
  };

  var getToken = function(){
    console.log('TOKEN!!!!')
    return $window.localStorage.getItem('authentication');
  }

  var isAuth = function(){
    return !!$window.localStoage.getItem('authentication');
  }

  var isSignedIn = function(){
    return isAuth();
  }

  var signout = function(){
    $window.localStorage.removeItem('authentication');
    $location.path('/signup');
  }

  return {
    signin: signin,
    getToken: getToken,
    signup: signup,
    isAuth: isAuth,
    isSignedIn: isSignedIn,
    signout: signout
  };
})
