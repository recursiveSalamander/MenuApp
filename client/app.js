angular.module('menuApp', [
  'ui.router',
  'ngMaterial',
  'ngAria',
  'ngAnimate'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
  .state('restaurantList', {
    url: '/restaurantList',
    templateUrl: '/restaurantList/restaurantList.html',
    authentication: true,
    signedin: true
  })
  .state('menuView', {
    url: '/menuView',
    templateUrl: '/menuView/menuView.html',
    params: {
      'menuData': null
    },
    authentication: true,
    signedin: true
  })
  .state('profileView', {
    url: '/profileView',
    templateUrl: '/profile/profileView.html',
    authentication: true,
    signedin: true
  })
  .state('signIn', {
    url: '/signIn',
    templateUrl: '/userAuth/signIn.html',
    authentication: false,
    signedin: false
  })
  .state('signUp', {
    url: '/signUp',
    templateUrl: '/userAuth/signUp.html',
    authentication: false,
    signedin: false
  });

  $urlRouterProvider.otherwise('/signIn');
});
