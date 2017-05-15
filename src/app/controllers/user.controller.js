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
        var logOut = function () {
            $window.sessionStorage.clear();
            $window.sessionStorage.userName;
        }, getuserInfo = function () {
        return regService.getUserFullInfo();
        }

        $scope.userName = $window.sessionStorage.userName;
        $scope.userFullInfo = getuserInfo();
        $scope.logout = logOut;

    }]);