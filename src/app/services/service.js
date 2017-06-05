angular.module('gis').service("Service", [
    "$http",
    "Transport",
    "MainConstants",
    function (
        $http,
        regTransport,
        MainConstants) {
        var regService = {};

        regService.registration = function (data) {
            return regTransport.registration(data);
        };
        regService.login = function (log, pass) {
            return getToken(log, pass);

        };
        regService.getUserFullInfo = function () {
            return regTransport.getUserFullInfo();

        };
        regService.updUser = function (data) {
            return regTransport.updUser(data);

        };
        regService.getFactoryByEmail = function (data) {
            return regTransport.getFactoryByEmail(data);

        };
        regService.getAllFactory = function (data) {
            return regTransport.getAllFactory(data);

        };
        regService.addFactory = function (data) {
            return regTransport.addFactory(data);

        };
        regService.addMaterial = function (data) {
            return regTransport.addMaterial(data);

        };
        regService.logout = function () {
            return regTransport.logout();

        };
        var getToken = function (log, pass) {
            return $http({ method: "POST", url: MainConstants.TENANT_API_URL + "/Token", data: "userName=" + encodeURIComponent(log) + "&password=" + encodeURIComponent(pass) + "&grant_type=password", headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response.data;
            })
        };

        return regService;
    }
]);
