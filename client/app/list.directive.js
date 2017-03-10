angular.module('app').directive('list', list);

function list() {
    var directive = {
        link: link,
        templateUrl: '/app/list.html',
        restrict: 'EA'
    };
    return directive;

    function link() {
        
    }
}