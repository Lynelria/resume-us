var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('CubeController', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/projects.json').success(function (data) {
        $scope.projects = data.projects;
    });

  }]);


resumeControllers.controller('ProjectDetailController', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {

        $http.get('data/projects.json').success(function (data) {
            $scope.projects = data.projects;
            $scope.projectId = $routeParams.projectId;
            console.log("Taille de projects " + $scope.projects.length);
            for (var i = 0; i < $scope.projects.length; i++) {
                if ($scope.projects[i].id == $scope.projectId) {
                    $scope.currentProject = $scope.projects[i];
                }
            }
        });


  }]);