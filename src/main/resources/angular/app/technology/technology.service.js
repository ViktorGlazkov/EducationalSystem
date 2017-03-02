angular.module('technology').service('technologyService', ['$http', '$q', function ($http, $q) {
    var URL = 'http://localhost:8080/EducationalSystem/api/technologies';

    var getAllTechnologies = function () {
        return $http.get(URL);
    };

    var getTechnology = function (id) {
        return $http.get(URL + '/' + id);
    };

    var createNewTechnology = function (technology) {
        return $http.post(URL, technology);
    };

    return {
        getAllTechnologies: getAllTechnologies,
        getTechnology: getTechnology,
        createNewTechnology: createNewTechnology
    };
}]);