angular.module('technology').config(configure);
configure.$inject = ['$routeProvider'];
function configure($routeProvider) {
    $routeProvider
        .when('/technology', {
            template: '<my-list ctrl="TechnologyListController""></my-list>'
        })
        .when('/technology/:id', {
            templateUrl: 'app/technology/details/technology_details.html',
            controller: 'TechnologyDetailsController',
            controllerAs: 'vm'
        })
}