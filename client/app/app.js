angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'security',
    'project', 'language', 'technology'
])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', '$httpProvider',
        function ($locationProvider, $routeProvider, $mdThemingProvider, $httpProvider) {
            $mdThemingProvider.theme('default').dark();
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        }])
    .constant('_',
        window._
    );
