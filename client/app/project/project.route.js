angular.module('project').config(configure);
configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/project', {
            template: '<my-list ctrl="ProjectListController""></my-list>'
        })
        .when('/project/:id', {
            templateUrl: 'app/project/details/project_details.html',
            controller: 'ProjectDetailsController',
            controllerAs: 'vm'
        })
}