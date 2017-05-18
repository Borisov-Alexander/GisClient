angular.module('gis').service("RequestHelper", [    
    "$http",
    "$rootScope",
    "MainConstants",
    "$window",
    function (        
        $http,
        $rootScope,
        MainConstants,
        $window) {
        var requestHelper = {};        
       
        
        var performRequest = function (method, url, data) {
            var headers = {
                "Authorization": "Bearer " + $window.sessionStorage.autToken
            };
            return $http({ method: method, url: url, headers: headers, data: data }).then(function (response) {                 
                return response.data;
            })
        };
        
        requestHelper.get = function (url) {
            return performRequest("GET", MainConstants.TENANT_API_URL + url);          
            
        };
        
        requestHelper.post = function (url,  data) {
            return performRequest("POST", MainConstants.TENANT_API_URL + url, data);
        };
        
        return requestHelper;
    }
]);
