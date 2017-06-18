angular.module('gis').controller('IndexController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$state",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $state) {
        var logOut = function () {            
            $state.go("login");
            
            $window.sessionStorage.clear();
            $window.sessionStorage.userName;
        };
        var messageCount = function () {
            regService.getMessageCount().then(function (data) {
                $scope.messageCount = data.materialCount;
            });
        }

        function NavBarCtrl($scope) {
            $scope.isCollapsed = true;
        }

        var messageList = function () {
            $state.go("messageList");
        };


        $scope.messageList = messageList;
        $scope.logout = logOut;
        $scope.messageCount = messageCount();
    }]);