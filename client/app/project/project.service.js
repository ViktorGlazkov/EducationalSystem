angular.module('project').service('projectService', ['$http', '$q', function ($http, $q) {
    var URL = 'http://localhost:8080/api/project';

    var getAllProjects = function () {
        return $http.get(URL);
    };

    var getProject = function (id) {
        return $http.get(URL + '/' + id);
    };

    var createNewProject = function (project) {
         return $http.post(URL, project);
    };

    var deleteProject = function (project) {
        return $http.delete(URL + '/' + project.id);
    };

    return {
        getAllProjects: getAllProjects,
        getProject: getProject,
        createNewProject: createNewProject,
        deleteProject: deleteProject
    };
}]);