angular.module('security').factory('CookiesService', function () {

    return {
        getFromDocument: function (cookieKey) {
            if (!cookieKey) {
                return null;
            }
            return decodeURIComponent(document.cookie
                    .replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(cookieKey)
                            .replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        }
    };
});
