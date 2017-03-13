angular.module('project').config(configure);
configure.$inject = ['$stateProvider'];

function configure($stateProvider) {
    $stateProvider
        .state('projects', {
            url: '/project',
            template: '<my-list ctrl="ProjectListController"></my-list>'
        })
        .state('project.details', {
            url: '/project/:id',
            templateUrl: 'app/project/details/project_details.html',
            controller: 'ProjectDetailsController',
            controllerAs: 'vm'
        })
}