angular.module('gis', []).run([
  "$location",
  "$rootScope",
  function (
    $location,
    $rootScope) {
    $rootScope.tenantName = $location.host().split(".")[0];
  }

]);

