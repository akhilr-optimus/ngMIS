
(function () {
    var app = angular.module('dashMIS');

    var projectDetailsCtrl = function ($scope, dataService,$location) {

        $scope.onEdit = function (data) {
            dataService.setSelectedProject(data);
            $location.url("/ProjectEdit");
        };

        $scope.onEditModal = function (data) {
            dataService.setSelectedProject(data);
            $location.url("/ProjectEdit");
        };

        $scope.getData = function () {
            $scope.projectsData = dataService.getAllProjects();
        };
                
        $scope.getData();
    };

    app.controller("projectDetailsCtrl", projectDetailsCtrl);
}());