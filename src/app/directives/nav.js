angular.module('gis').directive("gisNav", [
    function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "app/views/directives/nav.html"
        }
    }
]);