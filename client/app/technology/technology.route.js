angular.module('technology').config(configure);
configure.$inject = ['$stateProvider'];

function configure($stateProvider) {
    $stateProvider
        .state('technologies', {
            url: '/technology',
            template: '<my-list ctrl="TechnologyListController"></my-list>'
        })
        .state('technology.details', {
            url: '/technology/:id',
            templateUrl: 'app/technology/details/technology_details.html',
            controller: 'TechnologyDetailsController',
            controllerAs: 'vm'
        })
}