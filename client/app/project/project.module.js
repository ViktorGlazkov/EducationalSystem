angular.module('project', ['ngRoute'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/project', {
                    templateUrl: 'app/project/project_list.html',
                    controller: 'projectController',
                    controllerAs: 'vm'
                })
                .when('/project/:id', {
                    templateUrl: 'app/project/project_details.html',
                    controller: 'projectDetailsController',
                    controllerAs: 'vm'
                })
        }]);