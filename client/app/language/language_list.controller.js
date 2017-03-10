angular.module('language').controller('LanguageListController', LanguageListController);
LanguageListController.$inject = ['CRUDService'];

function LanguageListController(CRUDService) {

    var vm = this;
    vm.items = [];

    vm.getAll = getAll;
    vm.create = create;
    vm.deleteOne = deleteOne;

    vm.getAll();

    function getAll() {
        CRUDService.getAll('language').then(setItems);
    }

    function setItems(responce) {
        vm.items = responce.data;
    }

    function create(item) {
        CRUDService.create('language', item).then(vm.getAll);

    }

    function deleteOne(item) {
        CRUDService.deleteOne('language', item.id).then(vm.getAll);
    }
}