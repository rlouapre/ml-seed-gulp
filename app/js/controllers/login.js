
/*================================================================
=>                  Controller = Login
==================================================================*/
/*global app*/

app.controller('LoginCtrl', ['$scope', '$log', '$modalInstance', function ($scope, $log, $modalInstance) {

	'use strict';

	var login = function(credential) {
        $modalInstance.close(credential);
    };

    var cancel = function() {
        $modalInstance.dismiss('cancel');
    };

    angular.extend($scope, {
        credential: {},
        login: login,
        cancel: cancel
    });

}]);


/*-----  End of Controller = Login  ------*/



