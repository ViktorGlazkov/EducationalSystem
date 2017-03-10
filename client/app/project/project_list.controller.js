angular.module('project').controller('ProjectListController', ProjectListController);
ProjectListController.$inject = ['CRUDService', '$mdDialog'];

function ProjectListController(CRUDService, $mdDialog) {
    var vm = this;
    vm.items = [];

    vm.getAll = getAll;
    vm.create = create;
    vm.deleteOne = deleteOne;

    vm.getAll();

    function getAll() {
        CRUDService.getAll('project').then(setProjects);
    }

    function setProjects(responce) {
        vm.items = responce.data;
    }

    function create(ev) {
        showMdDialog(ev).then(function (project) {
            CRUDService.create('project', project).then(vm.getAll);
        });
    }

    function showMdDialog(ev) {
        return $mdDialog.show({
            controller: 'ProjectCreatorController',
            controllerAs: 'vm',
            templateUrl: 'app/project/creator/project_creator.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
    }

    function deleteOne(project) {
        CRUDService.deleteOne('project', project.id).then(vm.getAll);
    }
}