angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'auth', 'home', 'navigation',
    'project', 'language', 'technology'
])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', '$httpProvider',
        function ($locationProvider, $routeProvider, $mdThemingProvider, $httpProvider) {
            $mdThemingProvider.theme('default').dark();
            $routeProvider.when('/', {
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            }).otherwise('/');
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        }])
    .constant('_',
        window._
    );
