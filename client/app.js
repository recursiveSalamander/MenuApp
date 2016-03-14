angular.module('menuApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('restaurantList', {
    url: '/restaurantList',
    templateUrl: '/restaurantList/restaurantList.html'
  })
  .state('menuView', {
    url: '/menuView',
    templateUrl: '/menuView/menuView.html'
  })
  .state('signIn', {
    url: '/signIn',
    templateUrl: '/signIn/signIn.html'
  })
  .state('signUp', {
    url: '/signUp',
    templateUrl: '/signUp/signUp.html'
  })
  $urlRouterProvider.otherwise('/restaurantList');
});
