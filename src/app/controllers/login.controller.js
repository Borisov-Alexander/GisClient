angular.module('gis').controller('LoginController', [
    "$rootScope",
    "$http",
    "$scope",
    "Service",
    function (
              $rootScope,
              $http,
              $scope,
              regService) {
        
        $scope.log = "mail@mail.ru";
        $scope.pass = "$W2a7e88f2";
        

        $scope.login = function () {                      
             
            regService.login($scope.log, $scope.pass).then(function (data) {
                $rootScope.autToken = data.access_token;
            });
           
            
        };   
    }]);