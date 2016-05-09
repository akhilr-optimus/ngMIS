(function () {
    var dataService = function ($http) {

        var getAllProjects = function () {
            return $http.get("/api/Project/GetAll")
            .then(function (val) {                    
                    return val;
            });            
        };

        var getProject = function (id) {
            return $http.get("/api/Project/" + id + "Get")
            .then(function (val) {                    
                    return val;
            });            
        };
        
        return {
            getAllProjects: getAllProjects,
            getProject: getProject
        };
    };
    var app = angular.module("dashMIS");
    app.factory("dataService", dataService);
}());