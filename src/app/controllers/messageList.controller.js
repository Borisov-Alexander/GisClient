angular.module('gis').controller('MessageListController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$stateParams",
    "$state",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $stateParams,
    $state) {
        
        var message = function () {
            return regService.getAllMessage().then(function (response) {
                $scope.message = response;
            })            
        }        

        $scope.message = message();
        
    }]);