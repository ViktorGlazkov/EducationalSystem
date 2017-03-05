angular.module('language').controller('languageController',
    ['languageService',
        function (languageService) {

            var vm = this;
            vm.getAllLanguages = getAllLanguages;
            vm.createNewLanguage = createNewLanguage;
            vm.deleteLanguage = deleteLanguage;

            function getAllLanguages() {
                languageService.getAllLanguages().then(
                    function (d) {
                        vm.languages = d.data;
                    }
                );
            }

            function createNewLanguage(language) {
                languageService.createNewLanguage(language).then(
                    function () {
                        vm.getAllLanguages();
                    }
                );

            }

            function deleteLanguage(language) {
                languageService.deleteLanguage(language).then(
                    function () {
                        vm.getAllLanguages();
                    }
                );
            }

            vm.getAllLanguages();
        }]);