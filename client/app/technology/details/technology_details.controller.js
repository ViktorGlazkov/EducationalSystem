angular.module('technology').controller('TechnologyDetailsController', TechnologyDetailsController);
TechnologyDetailsController.$inject = ['$routeParams', 'CRUDService'];

function TechnologyDetailsController($routeParams, CRUDService) {

    var vm = this;
    vm.getTechnologyDetails = getTechnologyDetails;

    vm.getTechnologyDetails();

    function getTechnologyDetails() {
        CRUDService.getOne('technology', $routeParams.id).then(setDetails);
    }

    function setDetails(responce) {
        vm.technology = responce.data;
    }
}