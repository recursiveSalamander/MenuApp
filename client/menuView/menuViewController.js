angular.module('menuApp')

.controller('menuViewController', ['$window', '$scope', 'menuAppFactory', '$stateParams', 'userInfo', function($window, $scope, menuAppFactory, $stateParams, userInfo) {
  $scope.data = $stateParams.menuData;
  // console.log('****', $scope.data);
  $scope.restaurantId = $stateParams.restaurantId;
  // console.log('++line 7 in menuViewCtrl in restaurantId ',$scope.restaurantId);

  $scope.renderMenu = function(restaurantId) {
    console.log('++line 10 in renderMenu() in menuViewCtrl',restaurantId);
    menuAppFactory.getMenu(restaurantId)
    .then(function(data) {
      $scope.data = data;
      console.log('++line 14 inside renderMenu in menuViewController', data);
    }).catch(function(err) {
      console.log('++line 16 err inside renderMenu in menuViewController',err);
    });
  };

  $scope.onRating = function(rating, entryId, restaurantId) {
    console.log('++line 21 in onrating rating: ', rating);
    console.log('++line 22 in onrating entryId: ', entryId);
    console.log('++line 23 in onrating restaurantId: ', restaurantId );
    userInfo.ratingInfo(rating, entryId, restaurantId);
    // .then(function(data) {
    //   $scope.data = data;
    // }).catch(function(err) {
    //   console.log(err);
    // });
  };

}]);
