angular.module('language').controller('LanguageDetailsController', LanguageDetailsController);
LanguageDetailsController.$inject = ['$routeParams', 'CRUDService'];

function LanguageDetailsController($routeParams, CRUDService) {

    var vm = this;
    vm.getLanguageDetails = getLanguageDetails;

    vm.getLanguageDetails();

    function getLanguageDetails() {
        CRUDService.getOne('language', $routeParams.id).then(setLanguage);
    }

    function setLanguage(responce) {
        vm.language = responce.data;
    }
}