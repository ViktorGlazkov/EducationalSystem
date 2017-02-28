angular.module('project').controller('projectDetailsController',
    ['$scope', '$routeParams', 'projectService',
        function ($scope, $routeParams, projectService) {

            var vm = this;
            vm.getProjectDetails = getProjectDetails;

            function getProjectDetails() {
                projectService.getProject($routeParams.id).then(
                    function (d) {
                        vm.project = d.data;
                    }
                );
            }

            vm.getProjectDetails();
        }]);