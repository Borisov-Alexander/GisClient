angular.module('gis').controller('MapController', [
    "$rootScope",
    "$http",
    "$window",
    "$scope",
    "Service",
    "$stateParams",
    function (
        $rootScope,
        $http,
        $window,
        $scope,
        regService,
        $stateParams) {
        
        $scope.map;    
        $scope.markers = [];
        $scope.geocoder;
        var mapContainer = document.getElementById('map');
        $scope.infoWindow = new google.maps.InfoWindow({ map: $scope.map });
         

         

        $scope.initialize = function () {
            var mapOptions = {
                center: new google.maps.LatLng(59.57, 30.5),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(mapContainer, mapOptions);
            $scope.geocoder = new google.maps.Geocoder();
            $scope.map.addListener('click', function (e) {
                placeMarkerAndPanTo(e.latLng, $scope.map);
            }); 
        }

        function placeMarkerAndPanTo(latLng, map) {
            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });
            map.panTo(latLng);
        }


        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        }


        var geocodeAddress = function () {
            var address = document.getElementById('address').value;
            $scope.geocoder.geocode({ 'address': address }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    $scope.map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: results[0].geometry.location
                    });
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                }
            });
        }

        var getMyLocal = function () {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
            function successCallback(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                $scope.map.setCenter(pos);
                placeMarkerAndPanTo(pos, $scope.map);
            };

            function errorCallback(err) {
                alert('ERROR(' + err.code + '): ' + err.message);
            };
            
        };
        var getFatory = function () {
            if ($stateParams.id) {
                return regService.getFactoryById($stateParams.id).then(function (response) {
                    $scope.factory = response;
                    $scope.geocoder.geocode({ 'address': response.adress }, function (results, status) {
                        if (status === google.maps.GeocoderStatus.OK) {
                            $scope.map.setCenter(results[0].geometry.location);
                            var marker = new google.maps.Marker({
                                map: $scope.map,                                
                                draggable: true,
                                animation: google.maps.Animation.DROP,
                                position: results[0].geometry.location
                            });
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });

                })
            }
        };
        $scope.factory = getFatory();

        $scope.find = geocodeAddress;
        $scope.findMe = getMyLocal;


    }]);

 

