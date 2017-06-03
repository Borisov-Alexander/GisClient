angular.module('gis').controller('MapController', [
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
       
        $scope.cities = [];
        $scope.map;
        $scope.infoBox = new google.maps.InfoWindow();
        var mapContainer = document.getElementById('map');        

        $http.get('data.json').success(function (data) {
            $scope.cities = data;
        });

        $scope.initialize = function () {
            var mapOptions = {
                center: new google.maps.LatLng(50.5, 30.5),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(mapContainer, mapOptions);
        }

        $scope.showCity = function (city) {
            var coords = new google.maps.LatLng(city.lat, city.lng);
            $scope.infoBox.setContent(city.city + ' - ' + city.desc);
            $scope.infoBox.setPosition(coords);
            $scope.infoBox.open($scope.map);
            $scope.map.setCenter(coords);
        }
        

        
    }]);