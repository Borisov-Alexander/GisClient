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

        //$qProvider.errorOnUnhandledRejections(false);
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
            .state('addFactory', {
                url: '/addFactory',
                templateUrl: 'app/views/AddFactory.html',
                controller: 'AddFactoryController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('test', {
                url: '/test',
                templateUrl: 'app/views/Test.html',
                controller: 'TestController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('sendMessage', {
                url: '/sendMessage',
                templateUrl: 'app/views/SendMessage.html',
                controller: 'SendMessageController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('messageList', {
                url: '/messageList',
                templateUrl: 'app/views/MessageList.html',
                controller: 'MessageListController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('sendMessageInput', {
                url: '/sendMessage/:input/:output',
                templateUrl: 'app/views/SendMessage.html',
                controller: 'SendMessageController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('factoryList', {
                url: '/factoryList',
                templateUrl: 'app/views/FactoryList.html',
                controller: 'FactoryListController',
                resolve: {
                    factory: checkRouting
                }

            }) 
            .state('materialList', {
                url: '/materialList',
                templateUrl: 'app/views/MaterialList.html',
                controller: 'MaterialListController',
                resolve: {
                    factory: checkRouting
                }

            }) 
            .state('materialInfo', {
                url: '/materialList/:id',
                templateUrl: 'app/views/MaterialList.html',
                controller: 'MaterialListController',
                resolve: {
                    factory: checkRouting
                }

            }) 
            .state('addMaterial', {
                url: '/addMaterial/:id',
                templateUrl: 'app/views/AddMaterial.html',
                controller: 'AddMaterialController',
                resolve: {
                    factory: checkRouting
                }

            }) 
            .state('factoryInfo', {
                url: '/factoryInfo/:id',
                templateUrl: 'app/views/FactoryInfo.html',
                controller: 'FactoryInfoController',
                resolve: {
                    factory: checkRouting
                }

            }) 
            .state('map', {
                url: '/map',
                templateUrl: 'app/views/Map.html',
                controller: 'MapController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('factoryMap', {
                url: '/factoryMap/:id',
                templateUrl: 'app/views/Map.html',
                controller: 'MapController',
                resolve: {
                    factory: checkRouting
                }

            })
            .state('InputOutputMap', {
                url: '/map/:input/:output',
                templateUrl: 'app/views/Map.html',
                controller: 'MapController',
                resolve: {
                    factory: checkRouting
                }

            }) 
             
            .state('home', {
                url: '/home',
                templateUrl: 'app/views/Home.html',
                controller: 'HomeController',
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
        $window.location.href = '/';
    }
};

var checkCache = function ($q, $window, $location) {
    if ($window.sessionStorage.autToken != null) {
        $window.location.href = '#/user';
    }
};
    