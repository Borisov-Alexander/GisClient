angular.module('gis').controller('HomeController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$q",
    "$state",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $q,
        $state) {

        $scope.materialName ;
        $scope.inputAdress;
        showMaterial
        $scope.setting = [];
         
        var getDistance = function () {
            if ($scope.setting.value2) {
                regService.getMinCostMaterial($scope.materialName).then(function (material) {
                    $state.go("InputOutputMap", { input: $scope.inputAdress, output: material.factory.adress });
                })
            } else {
                if ($scope.setting.value3) {
                    regService.getMaterialByName($scope.materialName).then(function (material) {
                        var minDistance = 0;
                        var i = 0;
                        var count = 0;
                        var keys = Object.keys(material);
                        var minName;
                        var minMaterialId;
                        var minFactoryId;
                        angular.forEach(material, function (value, key) {
                            var distanceMatrix = new google.maps.DistanceMatrixService();
                            var distanceRequest = { origins: [$scope.inputAdress], destinations: [value.factory.adress], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC };
                            distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                                if (status != google.maps.DistanceMatrixStatus.OK) {
                                    console.log('An error occured: ' + status);
                                    count++;
                                }
                                else {
                                    if (i == 0) {
                                        minName = value.factory.adress;
                                        minFactoryId = value.factory.factoryId;
                                        minMaterialId = value.materialId;
                                        i = response.rows[0].elements[0].distance.value * 20 + $scope.materialcount* value.cost;
                                        count++;
                                        if (count == keys.length) {
                                            $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                        }
                                    } else {
                                        if (i > response.rows[0].elements[0].distance.value * 20 + $scope.materialcount * value.cost) {
                                            count++;
                                            minName = value.factory.adress;
                                            i = response.rows[0].elements[0].distance.value * 20 + $scope.materialcount * value.cost;
                                            if (count == keys.length) {
                                                $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                            }
                                        } else {
                                            count++;
                                            if (count == keys.length) {
                                                $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                            }
                                        }
                                    }

                                }
                            });
                        });
                    })
                }

                if ($scope.setting.value1) {
                    regService.getMaterialByName($scope.materialName).then(function (material) {
                        var minDistance = 0;
                        var i = 0;
                        var count = 0;
                        var keys = Object.keys(material);
                        var minName;
                        var minMaterialId;
                        var minFactoryId;
                        angular.forEach(material, function (value, key) {
                            var distanceMatrix = new google.maps.DistanceMatrixService();
                            var distanceRequest = { origins: [$scope.inputAdress], destinations: [value.factory.adress], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC };
                            distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                                if (status != google.maps.DistanceMatrixStatus.OK) {
                                    console.log('An error occured: ' + status);
                                    count++;
                                }
                                else {
                                    if (i == 0) {
                                        minName = value.factory.adress;
                                        minFactoryId = value.factory.factoryId;
                                        minMaterialId = value.materialId;
                                        i = response.rows[0].elements[0].distance.value;
                                        count++;
                                        if (count == keys.length) {
                                            $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                        }
                                    } else {
                                        if (i > response.rows[0].elements[0].distance.value) {
                                            count++;
                                            minName = value.factory.adress;
                                            i = response.rows[0].elements[0].distance.value;
                                            if (count == keys.length) {
                                                $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                            }
                                        } else {
                                            count++;
                                            if (count == keys.length) {
                                                $state.go("InputOutputMap", { input: $scope.inputAdress, output: minName });
                                            }
                                        }
                                    }

                                }
                            });
                        });
                    })
                }
            }
        };
        var showMaterial = function () {
            if ($scope.setting.value2) {
                regService.getMinCostMaterial($scope.materialName).then(function (material) {
                    $state.go("materialInfo", { id: material.materialId });
                })
            } else {
                if ($scope.setting.value3) {
                }

                if ($scope.setting.value1) {
                    regService.getMaterialByName($scope.materialName).then(function (material) {
                        var minDistance = 0;
                        var i = 0;
                        var count = 0;
                        var keys = Object.keys(material);
                        var minName;
                        var minMaterialId;
                        var minFactoryId;
                        angular.forEach(material, function (value, key) {
                            var distanceMatrix = new google.maps.DistanceMatrixService();
                            var distanceRequest = { origins: [$scope.inputAdress], destinations: [value.factory.adress], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC };
                            distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                                if (status != google.maps.DistanceMatrixStatus.OK) {
                                    console.log('An error occured: ' + status);
                                    count++;
                                }
                                else {
                                    if (i == 0) {
                                        minName = value.factory.adress;
                                        minFactoryId = value.factory.factoryId;
                                        minMaterialId = value.materialId;
                                        i = response.rows[0].elements[0].distance.value;
                                        count++;
                                        if (count == keys.length) {
                                            $state.go("materialInfo", { id: minMaterialId });
                                        }
                                    } else {
                                        if (i > response.rows[0].elements[0].distance.value) {
                                            count++;
                                            minName = value.factory.adress;
                                            i = response.rows[0].elements[0].distance.value;
                                            if (count == keys.length) {
                                                $state.go("materialInfo", { id: minMaterialId });
                                            }
                                        } else {
                                            count++;
                                            if (count == keys.length) {
                                                $state.go("materialInfo", { id: minMaterialId });
                                            }
                                        }
                                    }

                                }
                            });
                        });
                    })
                }
            }
        };
        var showFactory = function () {
            if ($scope.setting.value2) {
                regService.getMinCostMaterial($scope.materialName).then(function (material) {
                    $state.go("factoryInfo", { id: material.materialId });
                })
            } else {
                if ($scope.setting.value3) {
                }

                if ($scope.setting.value1) {
                    regService.getMaterialByName($scope.materialName).then(function (material) {
                        var minDistance = 0;
                        var i = 0;
                        var count = 0;
                        var keys = Object.keys(material);
                        var minName;
                        var minMaterialId;
                        var minFactoryId;
                        angular.forEach(material, function (value, key) {
                            var distanceMatrix = new google.maps.DistanceMatrixService();
                            var distanceRequest = { origins: [$scope.inputAdress], destinations: [value.factory.adress], travelMode: google.maps.TravelMode.DRIVING, unitSystem: google.maps.UnitSystem.METRIC };
                            distanceMatrix.getDistanceMatrix(distanceRequest, function (response, status) {
                                if (status != google.maps.DistanceMatrixStatus.OK) {
                                    console.log('An error occured: ' + status);
                                    count++;
                                }
                                else {
                                    if (i == 0) {
                                        minName = value.factory.adress;
                                        minFactoryId = value.factory.factiryId;
                                        minMaterialId = value.materialId;
                                        i = response.rows[0].elements[0].distance.value;
                                        count++;
                                        if (count == keys.length) {
                                            $state.go("factoryInfo", { id: minFactoryId });
                                        }
                                    } else {
                                        if (i > response.rows[0].elements[0].distance.value) {
                                            count++;
                                            minName = value.factory.adress;
                                            minFactoryId = value.factory.factiryId;
                                            minMaterialId = value.materialId;
                                            i = response.rows[0].elements[0].distance.value;
                                            if (count == keys.length) {
                                                $state.go("factoryInfo", { id: minFactoryId });
                                            }
                                        } else {
                                            count++;
                                            if (count == keys.length) {
                                                $state.go("factoryInfo", { id: minFactoryId });
                                            }
                                        }
                                    }

                                }
                            });
                        });
                    })
                }
            }
        };
           
        
        var getMaterialByName = function () {
            return regService.getMaterialByName($scope.materialName);
        };

        var materialCount = function () {
            return regService.getMaterialCount().then(function (response) {
                $scope.materialCount = response.materialCount;
            })
        };
        $scope.materialCount = materialCount();


        var viewsCount = function () {
            return regService.getViewsCount().then(function (response) {
                $scope.viewsCount = response.materialCount;
            })
        };
        $scope.viewsCount = viewsCount();

        //$scope.doGreeting = function (greeting) {
        //    $window.alert(greeting);
        //};



        var adressSetting = function () {
            if ($scope.setting.value4 == true) {               
                regService.getUserFullInfo().then(function (response) {
                    $scope.inputAdress = response.adress;
                })
            } else { 
                $scope.inputAdress = "";
            }
        }

        var setting1 = function () {            
                $scope.setting.value2 = false;
                $scope.setting.value3 = false;
        }
        var setting2 = function () {
            $scope.setting.value1 = false;
            $scope.setting.value3 = false;
        }
        var setting3 = function () {
            $scope.setting.value2 = false;
            $scope.setting.value1 = false;
        }

        $scope.setting.value1 = false;
        $scope.setting.value2 = false;
        $scope.setting.value3 = false;
        $scope.setting.value4 = false;



        $scope.adressSetting = adressSetting;
        $scope.setting1 = setting1;
        $scope.setting2 = setting2;
        $scope.setting3 = setting3;


        $scope.getMaterialByName = getMaterialByName; 
        $scope.getDistance = getDistance; 
        $scope.showFactory = showFactory; 
        $scope.showMaterial = showMaterial; 
    }]);