angular.module('gis').controller('UserController', [
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


        $scope.userName =  $rootScope.userName = data.userName;
               
    }]);