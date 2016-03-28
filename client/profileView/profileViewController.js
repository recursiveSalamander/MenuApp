angular.module('menuApp')

.controller('profileViewController', ['$window', '$scope', 'userInfo', '$stateParams', function($window, $scope, userInfo, $stateParams) {
  $scope.userInfo;
  var renderProfile = function() {
    console.log('++line 6 Inside renderProfile');
    userInfo.getUserInfo()
    .then(function(userInfo) {
      $scope.userInfo = userInfo;
      console.log(userInfo);
    }).catch(function(err) {
      console.log(err);
    });
  };
}]);
