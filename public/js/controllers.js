var resumeApp = angular.module('resumeApp', []);


resumeApp.controller('CubeController', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/projects.json').success(function (data) {
        $scope.projects = data.projects;
    });

  }]);