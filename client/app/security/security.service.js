angular.module('security').service('SecurityService', SecurityService);
SecurityService.$inject = ['$http', '$q'];

function SecurityService($http, $q) {
    var URL = 'http://localhost:8080/api/';
    var service = {
        login: login,
        getUser: getUser,
        logout: logout
    };
    return service;

    function login() {
        return $http.get(URL + '/login');
    }

    function getUser() {
        return $http.get(URL + 'user');
    }

    function logout() {
        return $http.post(URL + 'logout');
    }
}