angular.module('security').controller('SecurityController', SecurityController);
SecurityController.$inject = ['SecurityService'];

function SecurityController(SecurityService) {
    var vm = this;
    vm.user = null;

    vm.logout = logout;

    getUser();

    function getUser() {
        SecurityService.getUser().then(setUser)
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