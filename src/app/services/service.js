angular.module('gis').service("Service", [
    "$http",
    "Transport",
    function (
        $http,
        regTransport) {
        var regService = {};

        regService.registration = function (data) {
            return regTransport.registration(data);
        };
        regService.login = function (log, pass) {
            return getToken(log, pass);

        };

        var getToken = function (log, pass) {
            return $http({ method: "POST", url: "http://localhost:9110/Token", data: "userName=" + encodeURIComponent(log) + "&password=" + encodeURIComponent(pass) + "&grant_type=password", headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response.data;
            })
        };

        return regService;
    }
]);
