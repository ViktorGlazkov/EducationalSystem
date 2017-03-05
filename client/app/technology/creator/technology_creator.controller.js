angular.module('technology').controller('technologyCreatorController',
    ['$routeParams', '$mdDialog', 'languageService', 'technologyService',
        function ($routeParams, $mdDialog, languageService, technologyService) {

            var vm = this;
            vm.name = '';
            vm.languages = '';
            vm.selectedLanguage = '';

            vm.getLanguages = getLanguages;
            vm.create = create;
            vm.closeDialog = closeDialog;
            vm.hide = hide;
            vm.cancel = cancel;
            vm.answer = answer;

            function hide() {
                $mdDialog.hide();
            }

            function cancel() {
                $mdDialog.cancel();
            }

            function answer(answer) {
                $mdDialog.hide(answer);
            }

            function closeDialog() {
                $mdDialog.hide();
            }

            function getLanguages() {
                languageService.getAllLanguages().then(
                    function (d) {
                        vm.languages = d.data;
                    }
                );
            }

            function create() {
                var technology = {
                    name: vm.name,
                    language: {
                        id: vm.selectedLanguage.id
                    }
                };
                technologyService.createNewTechnology(technology).then(
                    answer()
                )

            }

            vm.getLanguages();
        }]);