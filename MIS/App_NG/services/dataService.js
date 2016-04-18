(function () {
    var dataService = function ($http) {

        var getAllProjects = function (value) {

            //var returnVal = 'initial';
            //if (value == 1)
            //    returnVal = 'one';
            //else
            //    returnVal = 'none';

            //return returnVal;

            var returnVal1 = 'vvaall';
            return $http.get("/api/Projects/GetAll")
            .then(function (val) {
                    //returnVal1 = val.data[1];
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