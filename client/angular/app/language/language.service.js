angular.module('language').service('languageService',
    ['$http', '$q', function ($http) {
        var URL = 'http://localhost:8080/EducationalSystem/api/languages';

        var getAllLanguages = function () {
            return $http.get(URL);
        };

        var getLanguage = function (id) {
            return $http.get(URL + '/' + id);
        };

        var createNewLanguage = function (name) {
            return $http.post(URL, {name: name});
        };

        var deleteLanguage = function (language) {
            return $http.delete(URL + '/' + language.id);
        };

        return {
            getAllLanguages: getAllLanguages,
            getLanguage: getLanguage,
            createNewLanguage: createNewLanguage,
            deleteLanguage: deleteLanguage
        };
    }]);