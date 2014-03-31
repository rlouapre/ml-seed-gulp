
/*================================================================
=>                   Service = encodingService
==================================================================*/
/*global app*/
/*jshint bitwise: false*/

app.service('encodingService', ['$rootScope', '$window', function ($rootScope, $window) {

	'use strict';

    /**
    *
    *  Base64 encode / decode
    *
    **/
    this.base64 = function () {

        // public method for encoding
        this.encode = function (input) {
            var output = '';
            try {
                output = $window.btoa(input);
            } catch (e) {
                output = $window.btoa($window.encodeURIComponent($window.escape(input)));
            }
            return output;
        },

        // public method for decoding
        this.decode = function (input) {
            var output = '';
            try {
                output = $window.atob(input);
            } catch (e) {
                output = $window.unescape($window.decodeURIComponent($window.atob(input)));
            }
            return output;

        };
    };
}]);


/*-----  End of Service = encoding  ------*/
