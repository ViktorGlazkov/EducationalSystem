angular.module('app').config(configure);
configure.$inject = ['$mdThemingProvider', '$httpProvider'];

function configure($mdThemingProvider, $httpProvider) {
    $mdThemingProvider.theme('default').dark();
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}