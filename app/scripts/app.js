'use strict';

/**
 * @ngdoc overview
 * @name upToApp
 * @description
 * # upToApp
 *
 * Main module of the application.
 */
angular
  .module('upToApp', [
    'ui.bootstrap',
    'ui.grid',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/donations', {
        templateUrl: 'views/donations.html',
        controller: 'DonationCtrl'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/donations', {
        templateUrl: 'views/donations.html',
        controller: 'DonationsCtrl',
        controllerAs: 'donations'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
