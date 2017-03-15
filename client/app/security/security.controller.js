angular.module('security').controller('SecurityController', SecurityController);
SecurityController.$inject = ['SecurityService', '$location', '$cookies', '$http', '$window'];

function SecurityController(SecurityService) {
    var vm = this;
    vm.user = null;

    vm.login = login;
    vm.logout = logout;

    getUser();
    
    function login() {
        SecurityService.login().then(obtainAccessToken, errorHandler);
    }

    function getUser() {
        SecurityService.getUser().then(setUser);
    }

    function logout() {
        SecurityService.logout().then(removeUser);
    }

    function setUser(user) {
        vm.user = user;
        console.log('Logged User : ', user);
    }

    function removeUser() {
        vm.user = null;
    }

    function obtainAccessToken(data, status, headers, config) {
        console.info('The user has been successfully logged in! ', data, status, headers, config);
    }


    function errorHandler(data, status, headers, config){
        console.error('Something went wrong while trying to login... ', data, status, headers, config);
    }
}