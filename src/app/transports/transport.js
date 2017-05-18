angular.module('gis').service("Transport", [
    "RequestHelper",
    function (requestHelper) {
        var regTransport = {};

        regTransport.registration = function (data) {
            return requestHelper.post("/api/Account/Register", data);
        };
        regTransport.login = function (data) {
            return requestHelper.post("/Token", data);
        };
        regTransport.getUserFullInfo = function () {
            return requestHelper.get("/api/Account/UserFullInfo");
        };
        regTransport.updUser = function (data) {
            return requestHelper.post("/api/Account/UpdUser", data);
        };
        regTransport.getFactoryByEmail = function () {
            return requestHelper.get("/api/Factory/GetFactoryByEmail");
        };
        regTransport.getAllFactory = function () {
            return requestHelper.get("/api/Factory/GetAllFactory");
        };
        regTransport.addFactory = function (data) {
            return requestHelper.post("/api/Factory/AddFactory", data);
        };
        regTransport.logout = function () {
            return requestHelper.post("/api/Account/Logout");
        };
        return regTransport;
    }
]);
