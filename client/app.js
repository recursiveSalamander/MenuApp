angular.module('menuApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('restaurantList', {
    url: '/restaurantlist',
    templateUrl: '/restaurantList/restaurantList.html'
  })
  .state('menuView', {
    url: '/menuview',
    templateUrl: '/menuView/menuView.html'
  })
  $urlRouterProvider.otherwise('/restaurantList');
});
