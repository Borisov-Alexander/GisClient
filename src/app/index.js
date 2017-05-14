angular.module('gis', ['ui.router'])
    .config(function (
        $stateProvider,
        $urlRouterProvider,
        $qProvider) {

        $qProvider.errorOnUnhandledRejections(false);

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('user', {
                url: '/user',
                templateUrl: 'app/views/User.html',
                controller: 'LoginController',
                resolve: {
                    factory: checkRouting
                }

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

var checkRouting = function ($q, $rootScope, $location) {
    if ($rootScope.autToken != null) {
        return true;
    } else {
        var defered = $q.defer();
        $http.post("/login", { userToken: "blah" })
            .success(function (response) {
                $rootScope.userProfile = response.userProfile;
                defered.resolve(true);
            })
            .error(function () {
                defered.reject();
                $location.path("/");
            });
        return defered.promise;
    }
};
    