angular.module('gis').controller('AddFactoryController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService) {

        var addFactory = function () {
            return regService.addFactory($scope.factory);
        };
        var logOut = function () {
            regService.logout();
            $window.sessionStorage.clear();
            $window.sessionStorage.userName;
        };
        $scope.factory;
        $scope.addFactory = addFactory;
        $scope.firstName = $window.sessionStorage.firstName;
        $scope.logout = logOut;
    }]);