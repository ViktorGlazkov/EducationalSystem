angular.module('technology').config(configure);
configure.$inject = ['$routeProvider'];
function configure($routeProvider) {
    $routeProvider
        .when('/technology', {
            templateUrl: 'app/technology/list/technology_list.html',
            controller: 'TechnologyListController',
            controllerAs: 'vm'
        })
        .when('/technology/:id', {
            templateUrl: 'app/technology/details/technology_details.html',
            controller: 'TechnologyDetailsController',
            controllerAs: 'vm'
        })
}