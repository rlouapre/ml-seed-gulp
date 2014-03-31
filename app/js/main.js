
/*================================================================
=>                  App = mlSeed
==================================================================*/
/*global angular*/

var app = angular.module('mlSeed', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.router', 'http-auth-interceptor']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        })
        .state('login', {
            url: '/login',
            onEnter: function($log, $stateParams, $state, $modal, authenticationService) {
                $modal.open({
                    templateUrl: 'templates/login.html',
                    resolve: {
                      // item: function() { new Item(123).get(); }
                    },
                    controller: 'LoginCtrl'
                }).result.then(function(credential) {
                    $log.log(credential);
                    if (credential) {
                        authenticationService.login(credential).then(function(data) {
                            return $state.transitionTo('home');
                        });
                    }
                });
            }
        })
        .state('search', {
            url: '/search',
            templateUrl: 'templates/search.html'
        });
}]);
app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
    'use strict';

    // $routeProvider
    //     .when('/home', {
    //         templateUrl: 'templates/home.html'
    //     })
    //     .otherwise({
    //         redirectTo: '/home'
    //     });

    $locationProvider.hashPrefix('!');

    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  mlSeed App Run()
==================================================================*/

app.run(['$rootScope', '$log', function ($rootScope, $log) {

    'use strict';

    $log.log('Angular.js run() function... $rootScope =');
}]);




/* ---> Do not delete this comment (Values) <--- */

app.constant('mlConfig', {
    // url: 'http://localhost:9015'
    // For dev mode only
    url: 'api',
    authentication: 'basic'
});
/* ---> Do not delete this comment (Constants) <--- */
