angular.module('language').controller('languageDetailsController',
    ['$routeParams', 'languageService',
        function ($routeParams, languageService) {

            var vm = this;
            vm.getLanguageDetails = getLanguageDetails;

            function getLanguageDetails() {
                languageService.getLanguage($routeParams.id).then(
                    function (d) {
                        vm.language = d.data;
                    }
                );
            };

            vm.getLanguageDetails();
        }]);