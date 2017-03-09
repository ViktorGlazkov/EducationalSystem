angular.module('language').controller('LanguageListController', LanguageListController);
LanguageListController.$inject = ['CRUDService'];

function LanguageListController(CRUDService) {

    var vm = this;
    vm.languages = [];

    vm.getAllLanguages = getAllLanguages;
    vm.createNewLanguage = createNewLanguage;
    vm.deleteLanguage = deleteLanguage;

    vm.getAllLanguages();

    function getAllLanguages() {
        CRUDService.getAll('language').then(setLanguages);
    }

    function setLanguages(responce) {
        vm.languages = responce.data;
    }

    function createNewLanguage(language) {
        CRUDService.create('language', language).then(vm.getAllLanguages);

    }

    function deleteLanguage(language) {
        CRUDService.deleteOne('language', language.id).then(vm.getAllLanguages);
    }
}