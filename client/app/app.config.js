angular.module('app').config(configure);
configure.$inject = ['$httpProvider', '$locationProvider'];

function configure($httpProvider, $locationProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    $locationProvider.html5Mode(true);
}