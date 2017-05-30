angular.module('gis').controller('HomeController', [
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
        var logOut = function () {
            regService.logout();
            $window.sessionStorage.clear();
            $window.sessionStorage.userName;
        };

        $scope.logout = logOut;
        
    }]);