angular.module('language', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/languages', {
                templateUrl: 'app/language/language_list.html',
                controller: 'languageController',
                controllerAs: 'vm'
            })
            .when('/language/:id', {
                templateUrl: 'app/language/language_details.html',
                controller: 'languageDetailsController',
                controllerAs: 'vm'
            })
    }]);