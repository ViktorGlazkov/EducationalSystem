angular.module('security', [
    'ngCookies',
    'ngResource',
    'ngRoute'
]).config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: 'app/security/login.html',
            controller: 'SecurityCtrl',
            controllerAs: 'vm'
        });

    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.xsrfCookieName = 'CSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
}]);