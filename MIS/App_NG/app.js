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
            .otherwise({ redirectTo: "/dashboard" });
    });
}());
