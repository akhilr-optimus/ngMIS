(function () {
    var app = angular.module('dashMIS');

    var projectEditCtrl = function ($scope, dataService, $location) {
        $scope.selProject;
        $scope.selProject = dataService.getSelectedProject();
        $scope.onSave = function (data) {
            dataService.saveProject(data);
            $location.url("/ProjectDetails");
        };
    };

    app.controller("projectEditCtrl", projectEditCtrl);
}());