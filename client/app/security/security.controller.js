angular.module('security').controller('SecurityController', SecurityController);
SecurityController.$inject = ['SecurityService', '$location', '$cookies', '$http', '$window'];

function SecurityController(SecurityService, $location, $cookies, $http, $window) {
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

    function obtainAccessToken(data) {
        $http.defaults.headers.common.Authorization = 'Bearer ' + data.data.access_token;
        var expireDate = new Date(new Date().getTime() + (1000 * data.data.expires_in));
        $cookies.put("access_token", data.data.access_token, {'expires': expireDate});
        $window.location.href = "index";
    }


    function errorHandler(error){
        console.log(error);
    }
}