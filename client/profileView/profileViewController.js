angular.module('menuApp')

.controller('profileViewController', ['$window', '$scope', 'userInfo', '$stateParams', function($window, $scope, userInfo, $stateParams) {
  $scope.userInfo;
  $scope.renderProfile = function() {
    userInfo.getUserInfo()
    .then(function(userInfo) {
      $scope.userInfo = userInfo;
      console.log(userInfo);
    }).catch(function(err) {
      console.log(err);
    });
  };
}]);
