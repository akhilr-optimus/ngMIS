(function () {
    var app = angular.module('dashMIS');

    var projectEditCtrl = function ($scope, dataService, $location) {

        $scope.onSave = function (data) {
            $scope.$apply(function () {
                dataService.setSelectedProject(data);
            });
            
            $location.url("/ProjectDetails");
        };
    };

    app.controller("projectEditCtrl", projectEditCtrl);
}());