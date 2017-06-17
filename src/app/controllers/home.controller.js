angular.module('gis').controller('HomeController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$q",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $q) {

        $scope.materialName ;
        $scope.inputAdress ;
        
        $scope.minName;
        var getDistance = function () {
            regService.getMaterialByName($scope.materialName).then(function (material) {
                var minDistance = 0;
                var i = 0;
                angular.forEach(material, function (value, key) {
                    var distanceMatrix = new google.maps.DistanceMatrixService();
                    var distanceRequest = { origins: [$scope.inputAdress], destinations: [value.factory.adress], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC };
                    distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                        if (status != google.maps.DistanceMatrixStatus.OK) {
                            console.log('An error occured: ' + status);
                        }
                        else {
                            if (i == 0) {
                                $scope.minName = value.factory.adress;
                                i = response.rows[0].elements[0].distance.value;
                            }
                            if (i > response.rows[0].elements[0].distance.value) {
                                $scope.minName = value.factory.adress;
                                i = response.rows[0].elements[0].distance.value;
                            }
                        }
                    });
                });
            })
        };           
           
        
        var getMaterialByName = function () {
            return regService.getMaterialByName($scope.materialName);
        };



        //$scope.doGreeting = function (greeting) {
        //    $window.alert(greeting);
        //};



        $scope.getMaterialByName = getMaterialByName; 
        $scope.getDistance = getDistance; 
    }]);