angular.module('gis').controller('MaterialListController', [
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
        
        var getMaterial = function () {
            if ($stateParams.id) {
                return regService.getMaterialById($stateParams.id).then(function (response) {
                    $scope.material = response;
                })
            } else {
                return regService.getAllMaterial().then(function (response) {
                    $scope.material = response;
                })
            }
        }
        var sendMessage = function (materialId, usertEmail) {
            $state.go("sendMessageInput", { input: materialId, output: usertEmail });
        }

        $scope.material = getMaterial();
        $scope.sendMessage = sendMessage;
    }]);