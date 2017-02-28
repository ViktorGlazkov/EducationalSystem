angular.module('technology').controller('technologyCreatorController',
    ['$routeParams', '$mdDialog', 'languageService', 'technologyService',
        function ($routeParams, $mdDialog, languageService, technologyService) {

            var vm = this;
            vm.getLanguages = getLanguages;
            vm.createNewTechnology = createNewTechnology;
            vm.showAlert = showAlert;
            vm.closeDialog = closeDialog;

            function getLanguages() {
                languageService.getAllLanguages().then(
                    function (d) {
                        vm.languages = d.data;
                    }
                );
            }

            function createNewTechnology(name, language) {
                var technology = {
                    name: name,
                    language: language
                };
                technologyService.createNewTechnology(technology).then(
                    function () {
                        vm.getAllTechnologies();
                    }
                );
            }

            function showAlert(ev) {
                var confirm = $mdDialog.confirm()
                    .title('Would you like to delete your debt?')
                    .textContent('All of the banks have agreed to forgive you your debts.')
                    .ariaLabel('Lucky day')
                    .targetEvent(ev)
                    .ok('Please do it!')
                    .cancel('Sounds like a scam');

                $mdDialog.show(confirm).then(function() {
                    vm.status = 'You decided to get rid of your debt.';
                }, function() {
                    vm.status = 'You decided to keep your debt.';
                });
            }



            function closeDialog() {
                $mdDialog.hide();
            }

            vm.getLanguages();
        }]);