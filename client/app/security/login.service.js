angular.module('security').factory('LoginService', function ($http, $resource, CookiesService) {

    var loginResources = $resource('http://localhost:8080/login', {}, {
        options: {method: 'OPTIONS', cache: false}
    });

    var logoutResources = $resource('http://localhost:8080/logout', {}, {
        options: {method: 'OPTIONS', cache: false}
    });

    var isCSRFTokenInvalidOrMissing = function(data, status) {
        return (status === 403 && data.message && data.message.toLowerCase().indexOf('csrf') > -1)
            || (status === 0 && data === null);
    };

    var login = function (username, password, successHandler, errorHandler) {

        // loginResources.options().$promise.then(function (response) {
            console.log('Obtained a CSRF token in a cookie', response);

            var csrfToken = CookiesService.getFromDocument($http.defaults.xsrfCookieName);
            console.log('Extracted the CSRF token from the cookie', csrfToken);

            var headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            headers[$http.defaults.xsrfHeaderName] = csrfToken;

            $http.post('http://localhost:8080/login', {
                username: username,
                password: password
            }, {
                headers: headers
            })
                .success(successHandler)

                .error(function (data, status, headers, config) {

                    if (isCSRFTokenInvalidOrMissing(data, status)) {
                        console.error('The obtained CSRF token was either missing or invalid. Have you turned on your cookies?');

                    } else {
                        errorHandler(data, status, headers, config);
                    }
                });

        // }).catch(function(response) {
        //     console.error('Could not contact the server... is it online? Are we?', response);
        // });
    };

    var logout = function(successHandler, errorHandler) {

        logoutResources.options().$promise.then(function (response) {
            console.log('Obtained a CSRF token in a cookie', response);

            var csrfToken = CookiesService.getFromDocument($http.defaults.xsrfCookieName);
            console.log('Extracted the CSRF token from the cookie', csrfToken);

            var headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            headers[$http.defaults.xsrfHeaderName] = csrfToken;

            $http.post('http://localhost:8080/logout', '', {
                headers: headers
            })
                .success(successHandler)
                .error(function(data, status, headers, config) {

                    if (isCSRFTokenInvalidOrMissing(data, status)) {
                        console.error('The obtained CSRF token was either missing or invalid. Have you turned on your cookies?');

                    } else {
                        errorHandler(data, status, headers, config);
                    }
                });

        }).catch(function(response) {
            console.error('Could not contact the server... is it online? Are we?', response);
        });
    };

    return {
        login: login,
        logout: logout
    };
});