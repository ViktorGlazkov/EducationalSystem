angular.module('app').service('CRUDService', CRUDService);
CRUDService.$inject = ['$http', '$q'];

function CRUDService($http, $q) {
    var URL = 'http://localhost:8080/api/';
    var service = {
        getAll: getAll,
        getOne: getOne,
        create: create,
        deleteOne: deleteOne
    };
    return service;

    function getAll(name) {
        return $http.get(URL + name);
    }

    function getOne(name, id) {
        return $http.get(URL + name + '/' + id);
    }

    function create(name, model) {
        return $http.post(URL + name, model);
    }

    function deleteOne(name, id) {
        return $http.delete(URL + name + '/' + id);
    }
}