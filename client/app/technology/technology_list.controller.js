angular.module('technology').controller('TechnologyListController', TechnologyListController);
TechnologyListController.$inject = ['CRUDService', '$mdDialog'];

function TechnologyListController(CRUDService, $mdDialog) {

    var vm = this;
    vm.items = [];

    vm.getAll = getAll;
    vm.create = create;
    vm.deleteOne = deleteOne;

    vm.getAll();

    function getAll() {
        CRUDService.getAll('technology').then(setItems);
    }

    function setItems(responce) {
        vm.items = responce.data;
    }

    function create(ev) {
        showMdDialog(ev).then(vm.getAll);
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

    function deleteOne(technology) {
        CRUDService.deleteOne('technology', technology.id).then(vm.getAll);
    }
}