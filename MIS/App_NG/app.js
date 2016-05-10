(function () {
    var app = angular.module('dashMIS', ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/dashboard',{
                templateUrl: "partials/NavMenu.html",
                controller: 'navMenuCtrl'
            })
            .when('/ProjectDetails', {
                templateUrl: "partials/ProjectDetails.html",
                controller: 'projectDetailsCtrl'
            })
            .when('/ProjectEdit', {
                templateUrl: "partials/ProjectEdit.html",
                controller: 'projectEditCtrl'
            })
            .otherwise({ redirectTo: "/dashboard" });
    });
}());
