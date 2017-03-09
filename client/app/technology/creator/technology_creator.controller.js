angular.module('technology').controller('TechnologyCreatorController', TechnologyCreatorController);
TechnologyCreatorController.$inject = ['$routeParams', '$mdDialog', 'CRUDService'];

function TechnologyCreatorController($routeParams, $mdDialog, CRUDService) {

    var vm = this;
    vm.name = '';
    vm.languages = '';
    vm.selectedLanguage = '';

    vm.getLanguages = getLanguages;
    vm.create = create;
    vm.closeDialog = closeDialog;
    vm.hide = hide;
    vm.cancel = cancel;
    vm.answer = answer;

    vm.getLanguages();

    function hide() {
        $mdDialog.hide();
    }

    function cancel() {
        $mdDialog.cancel();
    }

    function answer(answer) {
        $mdDialog.hide(answer);
    }

    function closeDialog() {
        $mdDialog.hide();
    }

    function getLanguages() {
        CRUDService.getAll('language').then(setLanguages);
    }

    function setLanguages(responce) {
        vm.languages = responce.data;
    }

    function create() {
        var technology = {
            name: vm.name,
            language: {
                id: vm.selectedLanguage.id
            }
        };
        CRUDService.create('technology', technology).then(answer)
    }
}