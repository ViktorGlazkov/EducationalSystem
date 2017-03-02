angular.module('project').controller('projectController',
    ['projectService', '$mdDialog',
        function (projectService, $mdDialog) {

    var vm = this;
    vm.getAllProjects = getAllProjects;
    vm.createProject = createProject;
    vm.deleteProject = deleteProject;

    function getAllProjects() {
        projectService.getAllProjects().then(
                function (d) {
                    vm.projects = d.data;
                }
            );
    }
    
    function createProject(ev) {
        $mdDialog.show({
            controller: 'projectCreatorController',
            controllerAs: 'vm',
            templateUrl: 'app/project/project_creator.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (project) {
                projectService.createNewProject(project).then(
                    vm.getAllProjects()
                );
            }, function () {
            });
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