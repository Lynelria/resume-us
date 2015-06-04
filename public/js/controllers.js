var resumeControllers = angular.module('resumeControllers', []);

resumeControllers.controller('CubeController', ['$scope', '$http', '$location', '$anchorScroll', function ($scope, $http, $location, $anchorScroll) {


    /** Waypoints **/
    var waypoint = new Waypoint({
        element: document.getElementById('career'),
        handler: function (direction) {
            $('#career-menu').addClass("active");

            $('#skills-menu').removeClass("active");
            $('#presentation-menu').removeClass("active");
            $('#projects-menu').removeClass("active");
        }
    });


    var waypoint2 = new Waypoint({
        element: document.getElementById('skills'),
        handler: function (direction) {
            $('#skills-menu').addClass("active");

            $('#career-menu').removeClass("active");
            $('#presentation-menu').removeClass("active");
            $('#projects-menu').removeClass("active");
        }
    });

    var waypoint3 = new Waypoint({
        element: document.getElementById('presentation'),
        handler: function (direction) {
            $('#presentation-menu').addClass("active");

            $('#career-menu').removeClass("active");
            $('#skills-menu').removeClass("active");
            $('#projects-menu').removeClass("active");

        }
    });

    var waypoint4 = new Waypoint({
        element: document.getElementById('projects'),
        handler: function (direction) {
            $('#projects-menu').addClass("active");

            $('#presentation-menu').removeClass("active");
            $('#career-menu').removeClass("active");
            $('#skills-menu').removeClass("active");

        }
    });



    $scope.tags = {};

    $scope.currentTag = "";

    $http.get('data/projects.json').success(function (data) {
        $scope.projects = data.projects;
        //$scope.tags = $scope.getTags(data.projects);
    });


    $scope.tagFilter = function (project) {
        if ($scope.currentTag !== null && $scope.currentTag !== '') {

            for (var i = 0; i < project.tags.length; i++) {

                if (project.tags[i].label === "C++" && $scope.currentTag === "cpp") {
                    return true;
                }
                if (project.tags[i].label.match(new RegExp($scope.currentTag, "i"))) {
                    return true;
                }
            }


            return false;
        } else {
            return true;
        }
    };

    $scope.scrollTo = function (id) {
        var old = $location.hash();
        $location.hash(id);
        $anchorScroll();
        //reset to old to keep any additional routing logic from kicking in
        $location.hash(old);
    };

    /*
    $scope.allTags = [];

    $scope.tagIncludes = ["java", "javascript", "html", "css", "python", "c++", "flex", "actionscript", "octave", "vrml", "objectivec", "android", "ios", "jcms", "struts", "spring", "thrift", "eactivity", "hibernate", "sql", "mysql", "mongo"];


    $scope.getTags = function (projects) {
        angular.forEach(projects, function (project) {
            angular.forEach(project.tags, function (tag) {
                if ($.inArray(tag.label.toLowerCase(), $scope.allTags) < 0) {
                    var mytag = {};
                    $scope.allTags[tag.label.toLowerCase()] = true;
                }
            });
        });
    }



    $scope.includeTag = function (tag) {
        var i = $.inArray(tag, $scope.tagIncludes);
        if (i > -1) {
            $scope.tagIncludes.splice(i, 1);
        } else {
            $scope.tagIncludes.push(tag);
        }
    }



    $scope.tagFilter = function (project) {
        if ($scope.tagIncludes.length > 0) {
            for (var i = 0; i < project.tags.length; i++) {
                if ($.inArray(project.tags[i].label.toLowerCase(), $scope.tagIncludes) >= 0) {
                    return true;

                }
            }
        }

        return false;
    }
    */

}]);



resumeControllers.controller('ProjectDetailController', ['$scope', '$routeParams', '$http', '$sanitize', function ($scope, $routeParams, $http, $sanitize) {

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