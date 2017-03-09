angular.module('project').config(configure);
configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/project', {
            templateUrl: 'app/project/list/project_list.html',
            controller: 'ProjectListController',
            controllerAs: 'vm'
        })
        .when('/project/:id', {
            templateUrl: 'app/project/details/project_details.html',
            controller: 'ProjectDetailsController',
            controllerAs: 'vm'
        })
}