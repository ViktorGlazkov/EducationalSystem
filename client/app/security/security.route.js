angular.module('security').config(configure);
configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/security/security.html',
            controller: 'SecurityController',
            controllerAs: 'vm'
        })
}