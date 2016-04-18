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

        $scope.getData = function() {            
            //var local = dataService.getAllProjects($scope.sms);
            //onData(local);
            dataService.getAllProjects($scope.sms).then(onData, onError);

            //$http.get("/api/Projects/GetAll")
            //.then(function (val) {
            //    returnVal1 = val.data[1];
            //    return returnVal1;
            //});            
        };        
    };

    app.controller("dashboardCtrl", dashboardCtrl);
}());