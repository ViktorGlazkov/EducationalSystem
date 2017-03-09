angular.module('project').controller('ProjectListController', ProjectListController);
ProjectListController.$inject = ['CRUDService', '$mdDialog'];

function ProjectListController(CRUDService, $mdDialog) {

    var vm = this;
    vm.projects = [];

    vm.getAllProjects = getAllProjects;
    vm.createProject = createProject;
    vm.deleteProject = deleteProject;

    vm.getAllProjects();

    function getAllProjects() {
        CRUDService.getAll('project').then(setProjects);
    }

    function setProjects(responce) {
        vm.projects = responce.data;
    }

    function createProject(ev) {
        $mdDialog.show({
            controller: 'ProjectCreatorController',
            controllerAs: 'vm',
            templateUrl: 'app/project/creator/project_creator.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
            .then(function (project) {
                CRUDService.create('project', project).then(vm.getAllProjects);
            }, function () {
            });
    }

    function deleteProject(project) {
        CRUDService.deleteOne('project', project.id).then(vm.getAllProjects);
    }
}