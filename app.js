var blog = angular.module('blog', ['ngRoute', 'ngAnimate']);

// ROUTING
blog.config(function($routeProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'page-home.html',
      controller: 'mainController'
    })

    // about page
    .when('/about', {
      templateUrl: 'page-about.html',
      controller: 'aboutController'
    })

    // resume page
    .when('/resume', {
      templateUrl: 'page-resume.html',
      controller: 'resumeController'
    })

    // notes page
    // TODO: NOTES PAGE

    // contact page
    .when('/contact', {
      templateUrl: 'page-contact.html',
      controller: 'contactController'
    });
});

// CONTROLLERS

// home page controller
blog.controller('mainController', function($scope) {
  $scope.pageClass = 'page-home';
});

// about page controller
blog.controller('aboutController', function($scope) {
  $scope.pageClass = 'page-about';
});

// contact page controller
blog.controller('contactController', function($scope) {
  $scope.pageClass = 'page-contact';
});

// resume page controller
blog.controller('resumeController', function($scope) {
  $scope.pageClass = 'page-resume';
});
