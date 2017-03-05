angular.module('home', []).controller('homeController', function($http) {
    var vm = this;
    vm.user = {};

    vm.getUser = getUser;

    function getUser() {
        var URL = 'http://localhost:8080/';
        $http.get(URL + 'user').then(function(response) {
            vm.user = response.data.name;
        });
    }

    vm.getUser();
});