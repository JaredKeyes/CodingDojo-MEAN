var discussion_app = angular.module('discussion_app', ['ngRoute']);

discussion_app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/login.html'
    })
    .when('/dashboard/:id', {
      templateUrl: '../partials/dashboard.html'
    })
    .when('/topic', {
      templateUrl: '../partials/topic.html'
    })
    .when('/user', {
      templateUrl: '../partials/user.html'
    })
    .when('/addQuestion/:id', {
      templateUrl: '../partials/addQuestion.html'
    })
    .when('/addAnswer', {
      templateUrl: '../partials/addAnswer.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
