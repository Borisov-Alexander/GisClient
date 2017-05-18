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
        

        var login = function () {
            regService.login($scope.log, $scope.pass).then(function (data) {
                $window.localStorage.autToken;
                $window.sessionStorage.autToken = data.access_token;                
                $window.sessionStorage.userName = data.userName;
                $window.location.href = '#/user';
            }); 
        }; 
        $scope.reg = function () {            
            $window.location.href = '#/registration';
        };

        $scope.login = login;
        $window.sessionStorage.autToken;
        $window.sessionStorage.userName;
        $window.sessionStorage.firstName;    
    }]);