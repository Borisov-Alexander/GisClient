angular.module('gis').controller('IndexController', [
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
        var messageCount = function () {
            regService.getMessageCount().then(function (data) {
                $scope.messageCount = data.materialCount;
            });
        }
        $scope.logout = logOut;
        $scope.messageCount = messageCount();
    }]);