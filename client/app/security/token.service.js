angular.module('security').service('TokenService', TokenService);
TokenService.$inject = [];

function TokenService() {
    var service = {
        setToken: setToken,
        getToken: getToken
    };
    return service;

    function setToken(accessTokenYouReceivedFromTheServer) {
        sessionStorage.setItem('token', accessTokenYouReceivedFromTheServer);
    }

    function getToken() {
        return sessionStorage.getItem('token');
    }
}