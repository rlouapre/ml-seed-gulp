
/*================================================================
=>                  Controller = Mainctrl
==================================================================*/
/*global app, angular*/

app.controller('MainCtrl', ['$scope', '$log', 'authenticationService', 'queryService', function ($scope, $log, authenticationService, queryService) {

    'use strict';

    $log.log('Controller ===  MainCtrl');
    var service = authenticationService;

    var model = {};
    var login = function () {
        model.token = service.login('richard', 'pwd');
        queryService.getDocument('/datasources/entities/program/90800').then(function (data) {
            model.document = data;
        });
    };


    angular.extend($scope, {
        model: model,
        login: login
    });
}]);


/*-----  End of Controller = Mainctrl  ------*/



