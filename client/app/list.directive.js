angular.module('app').directive('myList', list);

function list() {
    var directive = {
        templateUrl: 'app/list.html',
        restrict: 'EA',
        name: 'ctrl',
        controller: '@',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}