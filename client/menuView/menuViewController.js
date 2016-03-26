angular.module('menuApp')

.controller('menuViewController', ['$window', '$scope', 'menuAppFactory', '$stateParams', 'userInfo', function($window, $scope, menuAppFactory, $stateParams, userInfo) {
  $scope.data = $stateParams.menuData;
  console.log('++line 5 in menuViewCtrl scope.data: ', $scope.data);
  $scope.restaurantId = $stateParams.restaurantId;

  $scope.onRating = function(rating, entryId, restaurantId) {
    console.log('++line 21 in onrating rating: ', rating);
    console.log('++line 22 in onrating entryId: ', entryId);
    console.log('++line 23 in onrating restaurantId: ', restaurantId );
    userInfo.ratingInfo(rating, entryId, restaurantId);
  };

}]);
