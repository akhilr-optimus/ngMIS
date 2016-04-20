(function () {
    var app = angular.module('dashMIS');

    var navMenuCtrl = function ($scope) {
        $scope.active = false;
    };

    app.controller("navMenuCtrl", navMenuCtrl);
}());