angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'project',
    'language',
    'technology'
]).config(['$locationProvider', '$routeProvider', '$mdThemingProvider',
    function ($locationProvider, $routeProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .dark();
        $routeProvider.otherwise({redirectTo: '/projects'});
}]).constant('_',
    window._
);
