angular.module('security').controller('SecurityController', SecurityController);
SecurityController.$inject = ['SecurityService'];

function SecurityController(SecurityService) {
    var vm = this;
    vm.user = null;

    vm.login = login;
    vm.logout = logout;

    getUser();
    
    function login() {
        SecurityService.login().then(setUser);
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
}