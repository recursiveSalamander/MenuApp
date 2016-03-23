angular.module('menuApp')

.controller('profileViewController', ['$window', '$scope', 'userInfo', '$stateParams', function($window, $scope, userInfo, $stateParams) {

  $scope.renderProfile = function() {
    console.log('++line 6 inside renderProfile() in profileViewController');
    userInfo.getUserInfo()
    .then(function(users) {
      console.log('++line 9 inside renderProfile() after promise in profileViewController',users);
      $scope.users = users;
    }).catch(function(err) {
      console.log(err);
    });
  };
}]);