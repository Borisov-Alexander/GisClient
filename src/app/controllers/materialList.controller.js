angular.module('gis').controller('MaterialListController', [
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
        
        var getMaterial = function () {
            return regService.getAllMaterial().then(function (response) {
                $scope.material = response;
            })
        }               
        

        $scope.material = getMaterial();
        
    }]);