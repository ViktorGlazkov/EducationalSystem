angular.module('language').config(configure);
configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
    $routeProvider
        .when('/languages', {
            templateUrl: 'app/language/list/language_list.html',
            controller: 'LanguageListController',
            controllerAs: 'vm'
        })
        .when('/language/:id', {
            templateUrl: 'app/language/details/language_details.html',
            controller: 'LanguageDetailsController',
            controllerAs: 'vm'
        })
}