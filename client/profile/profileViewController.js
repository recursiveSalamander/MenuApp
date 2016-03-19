angular.module('menuApp')

.controller('profileViewController', ['$window', '$scope', 'userInfo', '$stateParams', function($window, $scope, userInfo, $stateParams) {

  $scope.renderProfile = function() {
    console.log('++line 6 inside renderProfile() in profileViewController');
    userInfo.getUserInfo()
    .then(function(user) {
      console.log('++line9 inside renderProfile() after promise in profileViewController',user);
      $scope.user = user;
    }).catch(function(err) {
      console.log('++line 11 err inside renderProfile() in profileViewController',err);
    });
  };
}]);