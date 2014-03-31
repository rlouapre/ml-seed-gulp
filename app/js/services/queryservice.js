
/*================================================================
=>                   Service = queryService
==================================================================*/
/*global app*/

app.service('queryService', ['$rootScope', '$http', 'mlConfig', function ($rootScope, $http, mlConfig) {

	'use strict';

	this.func = function () {
        return;
    };

    this.getDocument = function (uri) {
        var url = mlConfig.url + '/v1/documents';
        return $http.get(url + '?uri=' + uri);
    };

}]);


/*-----  End of Service = queryService  ------*/
