angular.module('project').controller('ProjectDetailsController', ProjectDetailsController);
ProjectDetailsController.$inject = ['$routeParams', 'CRUDService'];

function ProjectDetailsController($routeParams, CRUDService) {

    var vm = this;
    vm.getProjectDetails = getProjectDetails;

    vm.getProjectDetails();

    function getProjectDetails() {
        CRUDService.getOne('project', $routeParams.id).then(setDetails);
    }

    function setDetails(responce) {
        vm.project = responce.data;
    }
}