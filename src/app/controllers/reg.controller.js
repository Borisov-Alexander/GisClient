angular.module('gis').controller('RegController', [
    "$rootScope",
    "$http",
    "$scope",
    "Service",
    function (
        $rootScope,
        $http,
        $scope,
        regService) {
        
        $scope.email = "mail@mail.ru";
        $scope.pass = "$W2a7e88f2";
        $scope.confirmPass = "$W2a7e88f2";   
        $rootScope.autToken;            
        $scope.registration = function () {
            var data = {
                "Email": $scope.email,
                "Password": $scope.pass,
                "ConfirmPassword": $scope.confirmPass
            }  
            regService.registration(data);
           
        }; 

        $scope.login = function () {
            $window.location.href = '#/login';
        };

    }]);