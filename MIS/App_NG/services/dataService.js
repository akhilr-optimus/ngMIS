(function () {
    var dataService = function ($http) {

        var getAllProjects = function (value) {

            var returnVal1 = 'vvaall';
            return $http.get("/api/Project/GetAll")
            .then(function (val) {                    
                    return val;
            });            
        };
        
        return {
            getAllProjects: getAllProjects
        };
    };
    var app = angular.module("dashMIS");
    app.factory("dataService", dataService);
}());