angular.module('gis').controller('AddMaterialController', [
    "$rootScope",
    "$http",
    "$stateParams",
    "$window",
    "$scope",
    "Service",
    function (
        $rootScope,
        $http,
        $stateParams,
        $window,
        $scope,
        regService) {

        var addMaterial = function () {              
            $scope.material.factoryId = $stateParams.id;
            return regService.addMaterial($scope.material);
        };

        $scope.material;
        $scope.addMaterial = addMaterial;
       

    }]);