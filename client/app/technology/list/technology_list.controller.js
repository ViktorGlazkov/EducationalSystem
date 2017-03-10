angular.module('technology').controller('TechnologyListController', TechnologyListController);
TechnologyListController.$inject = ['CRUDService', '$mdDialog'];

function TechnologyListController(CRUDService, $mdDialog) {

    var vm = this;
    vm.getAllTechnologies = getAllTechnologies;
    vm.createTechnology = createTechnology;
    vm.deleteTechnology = deleteTechnology;

    vm.getAllTechnologies();

    function getAllTechnologies() {
        CRUDService.getAll('technology').then(setTechnologies);
    }

    function setTechnologies(responce) {
        vm.technologies = responce.data;
    }

    function createTechnology(ev) {
        showMdDialog(ev).then(vm.getAllTechnologies);
    }

    function showMdDialog(ev) {
        return $mdDialog.show({
            controller: 'TechnologyCreatorController',
            controllerAs: 'vm',
            templateUrl: 'app/technology/creator/technology_creator.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        })
    }

    function deleteTechnology(technology) {
        CRUDService.deleteOne('technology', technology.id).then(vm.getAllTechnologies);
    }
}