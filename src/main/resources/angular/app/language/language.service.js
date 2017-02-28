angular.module('language').service('languageService',
    ['$http', '$q', function ($http) {
        var URL = 'http://localhost:8080/EducationalSystem';

        var getAllLanguages = function () {
            return $http.get(URL + '/languages');
        };

        var getLanguage = function (id) {
            return $http.get(URL + '/language/' + id);
        };

        var createNewLanguage = function (name) {
            return $http.post(URL + '/language', {name: name});
        };

        var deleteLanguage = function (language) {
            return $http.delete(URL + '/language/' + language.id);
        };

        return {
            getAllLanguages: getAllLanguages,
            getLanguage: getLanguage,
            createNewLanguage: createNewLanguage,
            deleteLanguage: deleteLanguage
        };
    }]);