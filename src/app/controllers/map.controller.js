angular.module('gis').controller('MapController', [
    "$scope",
    
    function (
        $scope,
    ) {   
        
        $scope.map;
        $scope.infoBox = new google.maps.InfoWindow();
        var mapContainer = document.getElementById('map');
        $scope.initialize = function () {
            var mapOptions = {
                center: new google.maps.LatLng(59.56, 30.18),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            $scope.map = new google.maps.Map(mapContainer, mapOptions);
        }

         
    }]);
 
 
 