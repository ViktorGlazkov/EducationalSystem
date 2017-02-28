angular.module('project').controller('projectController',
    ['projectService',
        function (projectService) {

    var vm = this;
    vm.getAllProjects = getAllProjects;
    vm.createNewProject = createNewProject;
    vm.deleteProject = deleteProject;

    function getAllProjects() {
        projectService.getAllProjects().then(
                function (d) {
                    vm.projects = d.data;
                }
            );
    }
    
    function createNewProject(project) {
        projectService.createNewProject(project).then(
            function () {
                vm.getAllProjects();
            }
        );
    }

    function deleteProject(project) {
        projectService.deleteProject(project).then(
            function () {
                vm.getAllProjects();
            }
        );
    }

    vm.getAllProjects();
}]);