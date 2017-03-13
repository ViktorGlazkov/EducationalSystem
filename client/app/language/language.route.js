angular.module('language').config(configure);
configure.$inject = ['$stateProvider'];

function configure($stateProvider) {
    $stateProvider
        .state('languages', {
            url: '/language',
            template: '<my-list ctrl="LanguageListController""></my-list>'
        })
        .state('language.details', {
            url: '/language/:id',
            templateUrl: 'app/language/details/language_details.html',
            controller: 'LanguageDetailsController',
            controllerAs: 'vm'
        })
}