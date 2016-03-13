angular.module('menuApp')

.factory('menuAppFactory', function($http) {

  var getRestaurantList = function (address) {
    return $http({
      method: 'GET',
      url: '/api/restaurantList',
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
