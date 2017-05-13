angular.module('gis', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('user', {
            url: '/user',
            templateUrl: 'app/views/User.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/views/Login.html'
        })
        .state('registration', {
            url: '/registration',
            templateUrl: 'app/views/Registration.html'
        })

});