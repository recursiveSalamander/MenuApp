angular
  .module('menuApp')
  .controller('menuViewController', ['$window', '$scope', 'menuAppFactory', '$stateParams', 'userInfo', function($window, $scope, menuAppFactory, $stateParams, userInfo) {
    $scope.data = $stateParams.menuData;
    $scope.restaurantName = $stateParams.restaurantName;
    $scope.restaurantId = $stateParams.restaurantId;

    $scope.onRating = function(rating, entryId, restaurantId) {
      userInfo.ratingInfo(rating, entryId, restaurantId);
    };
  }]);
