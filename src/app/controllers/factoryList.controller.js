angular.module('gis').controller('FactoryListController', [
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
        }, getFatory = function () {
            return regService.getFactoryByEmail().then(function (response) {
                $scope.factory = response;
            })
        }, getAllFactory = function () {
            return regService.getAllFactory().then(function (response) {
                $scope.factory = response;
            })
        }
        var checkViewList = function () {
            if ($scope.FactoryView == true) {
                $scope.FactoryViewTitle = "Your factory";
                $scope.factory = getFatory();
                $scope.FactoryView = false;
            } else {
                $scope.FactoryViewTitle = "All factory";
                $scope.factory = getAllFactory();
                $scope.FactoryView = true;
            }
        }
        $scope.FactoryView = false;
        $scope.FactoryViewTitle = "Your factory";

        $scope.settingFactoryView = checkViewList;
             
        $scope.factory = getFatory();
        $scope.logout = logOut;
    }]);