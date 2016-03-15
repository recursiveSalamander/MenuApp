angular.module('menuApp')

.factory('menuAppFactory', function($http) {

  var getRestaurantList = function (address) {
    return $http({
      method: 'GET',
      url: '/api/restaurants',
      data: address
    })
    .then(function (resp) {
      return resp.data;
    })
  }

  var getMenu = function (restaurant) {
    console.log('++line28 inside getMenu in factories.js',restaurant);
    return $http({
      method: 'GET',
      url: '/api/menu',
      data: restaurant
    })
    .then(function (resp) {
      console.log('++line 35 in post getMenu inside factories',resp.data);
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
