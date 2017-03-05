angular.module('navigation', ['ngRoute', 'auth'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/navigation', {
                templateUrl: 'app/navigation/navigation.html',
                controller: 'navigationController',
                controllerAs: 'vm'
            })
    }]);