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
        regService.getMessageCount = function () {
            return regTransport.getMessageCount();

        };
        regService.getAllMessage = function () {
            return regTransport.getAllMessage();

        };
        regService.updUser = function (data) {
            return regTransport.updUser(data);

        };
        regService.addMessage = function (data) {
            return regTransport.addMessage(data);

        };
        regService.getFactoryByEmail = function (data) {
            return regTransport.getFactoryByEmail(data);
        };
        regService.getMinCostMaterial = function (data) {
            return regTransport.getMinCostMaterial(data);
        };
        regService.getFactoryById = function (data) {
            return regTransport.getFactoryById(data);

        };
        regService.getMaterialByName = function (data) {
            return regTransport.getMaterialByName(data);

        };
        regService.getMaterialCount = function () {
            return regTransport.getMaterialCount();

        };
        regService.getViewsCount = function () {
            return regTransport.getViewsCount();

        };
        regService.getMaterialById = function (data) {
            return regTransport.getMaterialById(data);

        };
        regService.getAllFactory = function (data) {
            return regTransport.getAllFactory(data);

        };
        regService.getAllMaterial = function (data) {
            return regTransport.getAllMaterial(data);

        };
        regService.addFactory = function (data) {
            return regTransport.addFactory(data);

        };
        regService.addMaterial = function (data) {
            return regTransport.addMaterial(data);
        };

        regService.incrByFactory = function (data) {
            return regTransport.incrByFactory(data);
        };
        regService.incrByMaterial = function (data) {
            return regTransport.incrByMaterial(data);
        };

        regService.logout = function () {
            return regTransport.logout();

        };
        var getToken = function (log, pass) {
            return $http({ method: "POST", url: MainConstants.TENANT_API_URL + "/Token", data: "userName=" + encodeURIComponent(log) + "&password=" + encodeURIComponent(pass) + "&grant_type=password", headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function (response) {
                return response.data;
            })
        };
        regService.getDistance = function (input, output) {
                    
        };

        return regService;
    }
]);
