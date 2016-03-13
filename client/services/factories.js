angular.module('menuApp')

.factory('mysocket', function(socketFactory){
  return socketFactory();
})

.factory('serverRequest', function(mysocket){
  return {
    getRestaurantList: getRestaurantList,
    getMenu: getMenu
  };
})

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
    return $http({
      method: 'GET',
      url: '/api/menu',
      data: restaurant
    })
    .then(function (resp) {
      return resp.data;
    })
  }
  return {
    getRestaurantList: getRestaurantList,
    getMenu: getMenu
  };
});
