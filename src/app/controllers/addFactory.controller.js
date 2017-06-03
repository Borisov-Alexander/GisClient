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
        
        $scope.factory;
        $scope.addFactory = addFactory;
        $scope.firstName = $window.sessionStorage.firstName;
       
    }]);