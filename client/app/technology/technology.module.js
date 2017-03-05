angular.module('technology', ['ngRoute', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/technologies', {
                templateUrl: 'app/technology/technology_list.html',
                controller: 'technologyController',
                controllerAs: 'vm'
            })
            .when('/technology/:id', {
                templateUrl: 'app/technology/technology_details.html',
                controller: 'technologyDetailsController',
                controllerAs: 'vm'
            })
    }]);