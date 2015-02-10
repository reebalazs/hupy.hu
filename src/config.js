
/* global module: true, require: true, angular: true */
/* jshint globalstrict: true */
'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');

  // $urlRouterProvider.when('/', '/');
  $urlRouterProvider.otherwise('/notfound');

  $stateProvider
    .state('about-us', {
      url: '/about-us',
      templateUrl: 'pages/about-us.html'
    });

  $stateProvider
    .state('notfound', {
      url: '/notfound',
      templateUrl: 'pages/notfound.html'
    });

  $stateProvider
    .state('dashboard', {
      url: "/",
      templateUrl: "pages/dashboard.html"
    });

  $stateProvider
    .state('feature1', {
      url: "/teljesitmeny",
      templateUrl: "content/feature1.html"
    });

  $stateProvider
    .state('feature2', {
      url: "/tamogatas",
      templateUrl: "content/feature2.html"
    });

  $stateProvider
    .state('feature3', {
      url: "/kozosseg",
      templateUrl: "content/feature3.html"
    });


}];
