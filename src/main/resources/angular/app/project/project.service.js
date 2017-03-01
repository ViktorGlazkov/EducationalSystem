angular.module('project').service('projectService', ['$http', '$q', function ($http, $q) {
    var URL = 'http://localhost:8080/EducationalSystem';

    var getAllProjects = function () {
        return $http.get(URL + '/projects');
    };

    var getProject = function (id) {
        return $http.get(URL + '/project/' + id);
    };

    var createNewProject = function (project) {
         return $http.post(URL + '/project', project);
    };

    var deleteProject = function (project) {
        return $http.delete(URL + '/project/' + project.id);
    };

    return {
        getAllProjects: getAllProjects,
        getProject: getProject,
        createNewProject: createNewProject,
        deleteProject: deleteProject
    };
}]);