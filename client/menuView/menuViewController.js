angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory, $stateParams) {
  $scope.data = $stateParams.menuData;
  console.log('****', $scope.data)

  $scope.renderMenu = function(restaurantId){
    console.log('++line 7 in renderMenu() in menuViewCtrl',restaurantId);
    menuAppFactory.getMenu(restaurantId)
    .then(function(data){
      $scope.data = data;
      console.log('++line 11 inside renderMenu in menuViewController', data);
    }).catch(function(err){
      console.log('++line 12 err inside renderMenu in menuViewController',err);
    });
  }
  // $scope.renderMenu();
});
