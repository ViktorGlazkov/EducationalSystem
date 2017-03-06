angular.module('security').controller('SecurityCtrl', [ '$cookies', '$http', '$location', '$q', '$resource',
    'CookiesService', 'CsrfService', 'LoginService',
    function ($cookies, $http, $location, $q, $resource, CookiesService, CsrfService, LoginService) {
    var vm = this;

    vm.greetings = {
        open: {
            getResult: '',
            postValue: 'some value'
        },
        secure: {
            getResult: '',
            postValue: 'some secure value'
        }
    };

    vm.credentials = {
        username: '',
        password: ''
    };

    vm.openResources = openResources;
    vm.getOpenGreetings = getOpenGreetings;
    vm.postOpenGreetings = postOpenGreetings;
    vm.login = login;
    vm.logout = logout;
    vm.secureResources = secureResources;
    vm.getSecureGreetings = getSecureGreetings;
    vm.postSecureGreetings = postSecureGreetings;
    vm.handleError = handleError;

    function openResources() {
        return $resource('http://localhost:8081/rest/open', {}, {
            get: {method: 'GET', cache: false, isArray: false},
            post: {method: 'POST', isArray: false}
        });
    }

    function getOpenGreetings() {
        vm.greetings.open.getResult = '';

        vm.openResources.get().$promise.then(function (response) {
            console.log('GET /rest/open returned: ', response);
            vm.greetings.open.getResult = response.greetings;
        });
    }

    function postOpenGreetings() {
        openResources.post({greetings: vm.greetings.open.postValue}).$promise.then(function(response) {
            console.log('POST /rest/open returned: ', response);
            console.info('You might want to check the server logs to see that the POST has been handled!');
        });
    }

    function login() {
        LoginService.login(vm.credentials.username, vm.credentials.password, function (data, status, headers, config) {
            // Success handler
            console.info('The user has been successfully logged in! ', data, status, headers, config);

        }, function(data, status, headers, config) {
            // Failure handler
            console.error('Something went wrong while trying to login... ', data, status, headers, config);
        });
    }

    function logout() {
        LoginService.logout(function (data, status, headers, config) {
            // Success handler
            vm.credentials = {username: '', password: ''};
            delete $cookies['JSESSIONID'];
            console.info('The user has been logged out!');

            $location.url('/');

        }, function(data, status, headers, config) {
            // Failure handler
            console.error('Something went wrong while trying to logout... ', data, status, headers, config);
        });
    }

    function secureResources(headers) {
        if (headers !== undefined) {
            return $resource('http://localhost:8081/rest/secure', {}, {
                post: {method: 'POST', headers: headers, isArray: false}
            });

        } else {
            return $resource('http://localhost:8081/rest/secure', {}, {
                get: {method: 'GET', cache: false, isArray: false},
                options: {method: 'OPTIONS', cache: false}
            });
        }
    }

    function getSecureGreetings() {
        vm.greetings.secure.getResult = '';

        secureResources().get().$promise.then(function (response) {
            console.log('GET /rest/secure returned: ', response);
            vm.greetings.secure.getResult = response.greetings;

        }).catch(function(response) {
            vm.handleError(response);
        });
    }

    function postSecureGreetings() {
        CsrfService.addResourcesCsrfToHeaders(secureResources().options, $http.defaults.headers.post).then(function (headers) {
            secureResources(headers).post({greetings: vm.greetings.secure.postValue}).$promise.then(function (response) {
                console.log('POST /rest/secure returned: ', response);
                console.info('You might want to check the server logs to see that the POST has been handled!');

            }).catch(function(response) {
                vm.handleError(response);
            });
        });
    }

    function handleError(response) {

        if (response.status === 401) {
            console.error('You need to login first!');

        } else {
            console.error('Something went wrong...', response);
        }
    }
}]);
