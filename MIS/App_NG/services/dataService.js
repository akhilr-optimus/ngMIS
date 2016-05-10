(function () {
    var dataService = function ($http) {

        var project = function (id, name, dept) {
            this.id = id;
            this.name = name;
            this.dept = dept;
        };

        // to do bring from web api
        projectsData = [];
        projectsData[0] = new project(1, 'Project 1', 'Dev');
        projectsData[1] = new project(2, 'Project 2', 'Dev');
        projectsData[2] = new project(3, 'Project 3', 'QA');
        projectsData[3] = new project(4, 'Project 4', 'QA');

        var selectedProject;

        var getAllProjects = function () {
            return projectsData;
            //return $http.get("/api/Project/GetAll")
            //.then(function (val) {                    
            //        return val;
            //});            
        };

        var getSelectedProject = function () {
            return selectedProject;
            //return $http.get("/api/Project/" + id + "/Get")
            //.then(function (val) {                    
            //        return val;
            //});            
        };
        
        var setSelectedProject = function (project) {
            selectedProject = project;
        };

        var saveProject = function (p) {
            //saveId = 1;
            ////saveId = projectsData.indexOf(project.id == p.id);
            //projectsData[saveId].name = p.name;
            //projectsData[saveId].dept = p.dept;
        };

        return {
            getAllProjects: getAllProjects,
            getSelectedProject: getSelectedProject,
            setSelectedProject: setSelectedProject,
            saveProject: saveProject
        };
    };
    var app = angular.module("dashMIS");
    app.factory("dataService", dataService);
}());