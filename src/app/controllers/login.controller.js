angular.module('gis').controller('LoginController', [
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
        
        $scope.log = "mail@mail.ru";
        $scope.pass = "$W2a7e88f2";
        

        $scope.login = function () {                     
             
            regService.login($scope.log, $scope.pass).then(function (data) {
                $window.sessionStorage.autToken = data.access_token; 
                $window.sessionStorage.userName = data.userName; 
                $window.location.href = '#/user';
            });
           
            
        }; 
        $scope.reg = function () {
            $window.location.href = '#/registration';
        };

    }]);