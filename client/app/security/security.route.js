angular.module('security').config(configure);
configure.$inject = ['$stateProvider'];

function configure($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'app/security/security.html',
            controller: 'SecurityController',
            controllerAs: 'vm'
        })
}