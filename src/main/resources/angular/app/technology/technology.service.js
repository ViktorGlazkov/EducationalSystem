angular.module('technology').service('technologyService', ['$http', '$q', function ($http, $q) {
    var URL = 'http://localhost:8080/EducationalSystem';

    var getAllTechnologies = function () {
        return $http.get(URL + '/technologies');
    };

    var getTechnology = function (id) {
        return $http.get(URL + '/technology/' + id);
    };

    var createNewTechnology = function (technology) {
        return $http.post(URL + '/technology', technology);
    };

    return {
        getAllTechnologies: getAllTechnologies,
        getTechnology: getTechnology,
        createNewTechnology: createNewTechnology
    };
}]);