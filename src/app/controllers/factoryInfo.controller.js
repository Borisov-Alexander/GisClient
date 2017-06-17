angular.module('gis').controller('FactoryInfoController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$stateParams",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $stateParams
        ) {

        var getFatory = function () {                        
            return regService.getFactoryById($stateParams.id).then(function (response) {
                $scope.factory = response;
            })
        };                     
        $scope.factory = getFatory();
        
    }]);