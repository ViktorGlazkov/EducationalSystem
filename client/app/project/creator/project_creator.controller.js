angular.module('project').controller('ProjectCreatorController', ProjectCreatorController);
ProjectCreatorController.$inject = ['$routeParams', '$mdDialog', 'CRUDService'];

function ProjectCreatorController($routeParams, $mdDialog, CRUDService) {

    var vm = this;
    vm.name = '';
    vm.languages = '';
    vm.technologies = [];
    vm.description = '';
    vm.selectedLanguage = [];
    vm.selectedTechnologies = [];

    vm.getLanguages = getLanguages;
    vm.getTechnologies = getTechnologies;
    vm.getSelectedTechnologies = getSelectedTechnologies;
    vm.create = create;
    vm.closeDialog = closeDialog;
    vm.hide = hide;
    vm.cancel = cancel;
    vm.answer = answer;

    vm.getLanguages();

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
        CRUDService.getAll('language').then(
            function (d) {
                vm.languages = d.data;
            }
        );
    }

    function getTechnologies() {
        CRUDService.getAll('technology').then(
            function (d) {
                vm.technologies = d.data;
            }
        );
    }

    function getSelectedTechnologies() {
        vm.technologies = [];
        for (var tech in vm.selectedLanguage) {
            vm.technologies.push(tech);
        }
    }

    function create() {
        var language_ids = [];
        vm.selectedLanguage.forEach(function (language) {
            language_ids.push(language.id)
        });
        var technology_ids = [];
        vm.selectedTechnologies.forEach(function (technology) {
            technology_ids.push(technology.id)
        });

        var project = {
            name: vm.name,
            description: vm.description,
            languages: language_ids,
            technologies: technology_ids
        };

        answer(project);
    }
}
