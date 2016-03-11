angular.module('menuApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('menuView', {
    url: '/menuView',
    templateUrl: 'menuView/menuView.html'
  })
  .state('restaurantList', {
    url: '/signin',
    templateUrl: 'log/signin.html'
  })
  // $urlRouterProvider.otherwise('/signin');
});
