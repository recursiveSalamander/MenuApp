angular.module('menuApp')

.controller('menuViewController', function($window, $scope, menuAppFactory) {
  $scope.data;
  $scope.renderMenu = function(){
    menuAppFactory.getMenu()
    .then(function(data){
      console.log('inside menuviewcontroller', data);
      $scope.data = data;
    }).catch(function(err){
      console.log(err);
    });
}
  $scope.renderMenu();

});
