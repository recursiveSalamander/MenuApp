angular
  .module('menuApp')
  .controller('profileViewController', ['$window', '$scope', 'userInfo', '$stateParams', function($window, $scope, userInfo, $stateParams) {

    var renderProfile = function() {
      userInfo.getUserInfo()
      .then(function(userInfo) {
        $scope.userInfo = userInfo;
      }).catch(function(err) {
        console.log(err);
      });
    };
    renderProfile();
  }]);
