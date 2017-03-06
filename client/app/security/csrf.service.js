angular.module('security').factory('CsrfService', function ($http, $q, CookiesService) {

    return {
        addResourcesCsrfToHeaders: function(optionsFunction, headers) {
            var result = $q.defer();

            if (headers === undefined) {
                headers = {};
            }

            optionsFunction().$promise.then(function (response) {
                console.log('Obtained a CSRF token in a cookie', response);

                // Extract the CSRF token
                var csrfToken = CookiesService.getFromDocument($http.defaults.xsrfCookieName);
                console.log('Extracted the CSRF token from the cookie', csrfToken);

                // Add CSRF to headers
                headers[$http.defaults.xsrfHeaderName] = csrfToken;

                result.resolve(headers);

            }).catch(function (response) {
                result.reject(response);
            });

            return result.promise;
        }
    };
});