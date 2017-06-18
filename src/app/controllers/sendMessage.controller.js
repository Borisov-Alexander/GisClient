angular.module('gis').controller('SendMessageController', [
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

         
        
        var init = function () {
            if ($stateParams.output) {
                return regService.getUserFullInfo().then(function (response) {
                    $scope.message = "Добрый день." + "\n" + "Наша компания " + response.company + " хочет приобрести у вас материал с идентификатором(id):" + $stateParams.input + "\n" + "В количестве:" + "\n" + "\n" + "\n" + "C уважением, " + response.firstName + " " + response.lastName + ".";
                    $scope.forCustomer = $stateParams.output;
                    
                })
                 
            }
        }
        var sendMessage = function () {
            var data = {                
                "inputCustomer": $window.sessionStorage.userName,
                "forCustomer": $stateParams.output,
                "message": $scope.message
            }
            regService.addMessage(data);            
        }

        $scope.init = init();
        $scope.sendMessage = sendMessage;
    }]);