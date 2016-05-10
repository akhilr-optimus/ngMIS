
(function () {
    var app = angular.module('dashMIS');

    var projectDetailsCtrl = function ($scope, dataService,$location) {

        $scope.onEdit = function (data) {
            dataService.setSelectedProject(data);
            $location.url("/ProjectEdit");
        };

        $scope.getData = function () {
            $scope.projectsData = dataService.getAllProjects();
        };
                
        $scope.getData();
        //$scope.getProjectData(2);
    };

    app.controller("projectDetailsCtrl", projectDetailsCtrl);
}());