angular.module('gis', ['ui.bootstrap']).run([
  "$location",
  "$rootScope",
  function (
    $location,
    $rootScope) {
    $rootScope.tenantName = $location.host().split(".")[0];
  }

]);

