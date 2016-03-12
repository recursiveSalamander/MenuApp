angular.module('menuApp', [
  'ui.router'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('search', {
    url: '/search',
    templateUrl: 'search/search.html'
  })
  .state('menuView', {
    url: '/menuView',
    templateUrl: 'menuView/menuView.html'
  })
  .state('restaurantList', {
    url: '/restaurantList',
    templateUrl: 'restaurantList/restaurantList.html'
  })
  $urlRouterProvider.otherwise('/search');
});
