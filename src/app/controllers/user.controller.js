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
            regService.logout();
            $window.sessionStorage.clear();            
        }, getuserInfo = function () {
            $window.sessionStorage.autToken;
            return regService.getUserFullInfo().then(function (response) {                
                $scope.userFullInfo = response;
            })
        }, updUser = function () {               
            return regService.updUser($scope.userFullInfo);
         }

        $scope.userName = $window.sessionStorage.userName;
        $scope.firstName = $window.sessionStorage.firstName;
        $scope.userFullInfo = getuserInfo();
        $scope.logout = logOut;
        $scope.updUser = updUser;
    }]);