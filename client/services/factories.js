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

  return {
    getRestaurantList: getRestaurantList
  };
});
