angular.module('menuApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('restaurantList', {
    url: '/restaurantList',
    templateUrl: 'restaurantList/restaurantList.html'
  })
  .state('menuView', {
    url: '/menuView',
    templateUrl: 'menuView/menuView.html'
  })
  $urlRouterProvider.otherwise('/restaurantList');
});
