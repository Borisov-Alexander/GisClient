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
         

        $scope.userName = $window.sessionStorage.userName;
        $scope.userFullInfo = getuserInfo;


        var getuserInfo = function () {
            var data = {};
            return regService.getUserFullInfo(data);
        }
    }]);