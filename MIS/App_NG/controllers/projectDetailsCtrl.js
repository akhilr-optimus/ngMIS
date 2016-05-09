
(function () {
    var app = angular.module('dashMIS');

    var projectDetailsCtrl = function ($scope, dataService) {

        var project = [
            {projectId: 1, projectName: 'Project 1', projectDepartment: 'Dev'},
            {projectId: 2, projectName: 'Project 2', projectDepartment: 'Dev'},
            {projectId: 3, projectName: 'Project 3', projectDepartment: 'QA'},
            {projectId: 4, projectName: 'Project 4', projectDepartment: 'QA'}
        ];

        $scope.projectsData = project;

        var onEdit = function (data) {
            $scope.project.projectName = data.data;
        };

        var onData = function (data) {
            $scope.project.projectsData = data.data;
        };

        var onError = function (reason) {
            $scope.error = reason;
        };

        $scope.getData = function () {
            dataService.getAllProjects().then(onData, onError);
        };

        $scope.getProjectData = function (projectId) {
            dataService.getProject(projectId).then(onEdit, onError);
        };

        $scope.getData();
    };

    app.controller("projectDetailsCtrl", projectDetailsCtrl);
}());