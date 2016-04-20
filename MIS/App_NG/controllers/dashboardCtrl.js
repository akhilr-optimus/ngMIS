(function () {
    var app = angular.module('dashMIS');

    var dashboardCtrl = function ($scope, dataService, $http) {        
        $scope.sms = 'frmDashboardCtrl';
        $scope.returnVal = 'default';

        var onData = function(data) {
            $scope.returnVal = data.data[$scope.sms];
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        $scope.getData = function () {
            dataService.getAllProjects($scope.sms).then(onData, onError);
        };
    };

    app.controller("dashboardCtrl", dashboardCtrl);
}());
