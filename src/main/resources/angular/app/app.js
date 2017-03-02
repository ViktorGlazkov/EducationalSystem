angular.module('app', [
    'ngRoute',
    'ngResource',
    'ngMaterial',
    'project',
    'language',
    'technology'
])
    .config(['$locationProvider', '$routeProvider', '$mdThemingProvider', '$httpProvider',
        function ($locationProvider, $routeProvider, $mdThemingProvider, $httpProvider) {
            $mdThemingProvider.theme('default').dark();
            $routeProvider.when('/', {
                templateUrl: 'home.html',
                controller: 'home',
                controllerAs: 'vm'
            }).when('/login', {
                templateUrl: 'login.html',
                controller: 'navigation',
                controllerAs: 'vm'
            }).otherwise('/');
            $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        }])
    .constant('_',
        window._
    )
    .controller('home', function ($http) {
        var vm = this;
        vm.greeting = '';
        vm.getGreeting = getGreeting;
        var URL = 'http://localhost:8080/EducationalSystem';
        function getGreeting() {
            $http.get(URL + '/resource/').then(function (response) {
                vm.greeting = response.data;
            })
        }

        vm.getGreeting();
    })
    .controller('navigation', function ($rootScope, $http, $location) {
        var vm = this;
        vm.credentials = {};

        vm.authenticate = authenticate;
        vm.login = login;
        vm.logout = logout;

        var URL = 'http://localhost:8080/EducationalSystem';

        function authenticate(credentials, callback) {
            var headers = credentials ? {
                authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)
                } : {};

            $http.get(URL + '/user', {headers: headers}).then(function (response) {
                $rootScope.authenticated = !!response.data.name;
                callback && callback();
            }, function () {
                $rootScope.authenticated = false;
                callback && callback();
            })
        }

        vm.authenticate();

        function login() {
            vm.authenticate(vm.credentials, function () {
                if ($rootScope.authenticated) {
                    $location.path("/");
                    vm.error = false;
                } else {
                    $location.path("/login");
                    vm.error = true;
                }
            })
        }

        function logout() {
            $http.post('logout', {}).finally(function () {
                $rootScope.authenticated = false;
                $location.path("/");
            })
        }
    });
