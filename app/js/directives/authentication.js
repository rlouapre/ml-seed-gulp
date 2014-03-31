
/*================================================================
=>                  Directive = authentication
==================================================================*/
/*global app*/

app.directive('mlAuthentication', ['$rootScope', '$log', '$state', function ($rootScope, $log, $state) {

    'use strict';

	return {
		restrict: 'C',
		link: function (scope, element, attrs) {
            scope.$on('event:auth-loginRequired', function (request) {
                $log.log($state.current.name);
                $log.log(request);
                $state.go('login');
              // login.slideDown('slow', function() {
              //   main.hide();
              // });
            });
            scope.$on('event:auth-loginConfirmed', function () {
                $log.log('event:auth-loginConfirmed');
              // main.show();
              // login.slideUp();
            });
		}
	};
}]);


/*-----  End of Directive = authentication  ------*/
