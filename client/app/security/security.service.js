angular.module('security').service('SecurityService', SecurityService);
SecurityService.$inject = ['$http'];

function SecurityService($http) {

    var URL = 'http://localhost:8080/';
    var service = {
        login: login,
        getUser: getUser,
        logout: logout
    };
    return service;

    function login() {
        return $http.post(URL + 'login');
    }

    function getUser() {
        return $http.get(URL + 'api/user');
    }

    function logout() {
        return $http.post(URL + 'logout');
    }
}