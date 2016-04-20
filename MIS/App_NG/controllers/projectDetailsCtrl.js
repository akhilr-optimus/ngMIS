
(function () {
    var app = angular.module('dashMIS');

    var projectDetailsCtrl = function ($scope) {
        $scope.data = 1;
    };

    app.controller("projectDetailsCtrl", projectDetailsCtrl);
}());