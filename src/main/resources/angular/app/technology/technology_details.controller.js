angular.module('technology').controller('technologyDetailsController',
    ['$routeParams', 'technologyService',
        function ($routeParams, technologyService) {

            var vm = this;
            vm.getTechnologyDetails = getTechnologyDetails;

            function getTechnologyDetails() {
                technologyService.getTechnology($routeParams.id).then(
                    function (d) {
                        vm.technology = d.data;
                    }
                );
            }

            vm.getTechnologyDetails();
        }]);