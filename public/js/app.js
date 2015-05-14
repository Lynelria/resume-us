var resumeApp = angular.module('resumeApp', ['ngRoute', 'resumeControllers', 'ngSanitize', 'ui.bootstrap']);



resumeApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/projects', {
            templateUrl: 'partials/project-list.html',
            controller: 'CubeController'
        }).
        when('/projects/:projectId', {
            templateUrl: 'partials/project-detail.html',
            controller: 'ProjectDetailController'
        }).
        otherwise({
            redirectTo: '/projects'
        });
  }]);