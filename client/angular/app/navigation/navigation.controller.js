angular.module('navigation').controller('navigationController',
    function($route, auth) {

        var vm = this;

        vm.credentials = {};

        vm.tab = tab;
        vm.authenticated = authenticated;
        vm.login = login;
        vm.logout = auth.clear;

        function tab(route) {
            return $route.current && route === $route.current.controller;
        }

        function authenticated() {
            return auth.authenticated;
        }

       function login() {
            auth.authenticate(self.credentials, function(authenticated) {
                if (authenticated) {
                    console.log("Login succeeded");
                    self.error = false;
                } else {
                    console.log("Login failed");
                    self.error = true;
                }
            })
        }
    });