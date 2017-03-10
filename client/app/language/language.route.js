angular.module('language').config(configure);
configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/language', {
            template: '<my-list ctrl="LanguageListController""></my-list>'
        })
        .when('/language/:id', {
            templateUrl: 'app/language/details/language_details.html',
            controller: 'LanguageDetailsController',
            controllerAs: 'vm'
        })
}