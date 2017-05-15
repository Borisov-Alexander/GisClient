angular.module('gis', ['ui.router'])
    .config(['$stateProvider',
        '$urlRouterProvider',
        '$qProvider',
        '$locationProvider',
        function (
        $stateProvider,
        $urlRouterProvider,
        $qProvider,
        $locationProvider) {

        $qProvider.errorOnUnhandledRejections(false);
        $locationProvider.hashPrefix('');       
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'app/views/User.html',
                controller: 'UserController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/views/Login.html',
                resolve: {
                    factory: checkCache
                }
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'app/views/Registration.html'
            })

    }]);

var checkRouting = function ($q, $window, $location) {
    if ($window.sessionStorage.autToken != null) {
        return true;
    } else {
        var defered = $q.defer();        
        return defered.promise;
    }
};

var checkCache = function ($q, $window, $location) {
    if ($window.sessionStorage.autToken != null) {
        $window.location.href = '#/user';
    }
};
    