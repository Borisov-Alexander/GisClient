angular.module('gis').service("RequestHelper", [    
    "$http",
    "$rootScope",
    "MainConstants",
    function (        
        $http,
        $rootScope,
        MainConstants) {
        var requestHelper = {};
        
        var headers = {
            "Authorization": "Bearer " + $rootScope.autToken
        };
        
        var performRequest = function (method, url,  data) {
            return $http({ method: method, url: url, headers: headers, data: data}).then(function (response) {
                return response.data;
            })
        };
        
        requestHelper.get = function (url) {
            return performRequest("GET", url);
        };
        
        requestHelper.post = function (url,  data) {
            return performRequest("POST", MainConstants.TENANT_API_URL + url, data);
        };
        
        return requestHelper;
    }
]);
