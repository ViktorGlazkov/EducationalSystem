angular.module('security').controller('SecurityCtrl', [ '$cookies', '$http', '$location', '$q', '$resource',
    'CookiesService', 'CsrfService', 'LoginService',
    function ($cookies, $http, $location, $q, $resource, CookiesService, CsrfService, LoginService) {
    var vm = this;

    vm.credentials = {
        username: '',
        password: ''
    };

    vm.login = login;
    vm.logout = logout;

    function login() {
        LoginService.login(vm.credentials.username, vm.credentials.password, function (data, status, headers, config) {
            console.info('The user has been successfully logged in! ', data, status, headers, config);

        }, function(data, status, headers, config) {
            console.error('Something went wrong while trying to login... ', data, status, headers, config);
        });
    }

    function logout() {
        LoginService.logout(function (data, status, headers, config) {
            vm.credentials = {username: '', password: ''};
            delete $cookies['JSESSIONID'];
            console.info('The user has been logged out!');

            $location.url('/');

        }, function(data, status, headers, config) {
            console.error('Something went wrong while trying to logout... ', data, status, headers, config);
        });
    }
}]);
