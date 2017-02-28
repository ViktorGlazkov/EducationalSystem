angular.module('technology').controller('technologyController',
    ['technologyService', '$mdDialog',
        function (technologyService, $mdDialog) {

            var vm = this;
            vm.getAllTechnologies = getAllTechnologies;
            vm.showAdvanced = showAdvanced;
            vm.deleteTechnology = deleteTechnology;

            function getAllTechnologies() {
                technologyService.getAllTechnologies().then(
                    function (d) {
                        vm.technologies = d.data;
                    }
                );
            }

            function showAdvanced(ev) {
                $mdDialog.show({
                    controller: 'technologyCreatorController',
                    controllerAs: 'vm',
                    templateUrl: 'app/technology/technology_creator.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                    .then(function () {
                        vm.getAllTechnologies();
                    }, function () {
                    });
            }

            function deleteTechnology(technology) {
                technologyService.deleteTechnology(technology).then(
                    function () {
                        vm.getAllTechnologies();
                    }
                );
            }

            vm.getAllTechnologies();
        }]);