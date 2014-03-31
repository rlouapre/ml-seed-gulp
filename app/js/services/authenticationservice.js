
/*================================================================
=>                   Service = authenticationService
==================================================================*/
/*global app*/

app.service('authenticationService', ['$rootScope', '$http', '$cookieStore', '$q', 'mlConfig', 'authService', 'encodingService',
    function ($rootScope, $http, $cookieStore, $q, mlConfig, authService, encodingService) {

    'use strict';

    this.login = function (credentials) {
        var defered = $q.defer();
        // switch (mlConfig.authentication) {
        //     case 'basic':
        //         var encodedUserNameAndPassword = new encodingService.base64().encode(credentials.user + ':' + credentials.password);
        //         $cookieStore.put('basicCredentials', encodedUserNameAndPassword);
        //         $http.defaults.headers.common['Authorization'] = 'Basic ' + encodedUserNameAndPassword;
        //         authService.loginConfirmed();
        //         defered.resolve();
        //         break;
        //     default:
        //         break;
        // }
        return defered.promise;
    };

    this.logout = function () {
        // switch (mlConfig.authentication) {
        //     case 'basic':
        //         $cookieStore.remove('basicCredentials');
        //         delete $http.defaults.headers.common['Authorization'];
        //         break;
        //     default:
        //         break;
        // }
    };
}]);


/*-----  End of Service = authenticationService  ------*/
