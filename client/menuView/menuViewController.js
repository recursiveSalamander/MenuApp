angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory) {
  $scope.data;
  $scope.renderMenu = function(restaurantId){
    menuAppFactory.getMenu(restaurantId)
    .then(function(data){
      console.log('++line 8 inside menuviewcontroller', data);
      $scope.data = data;
    }).catch(function(err){
      console.log(err);
    });
}
  // $scope.renderMenu();

});
