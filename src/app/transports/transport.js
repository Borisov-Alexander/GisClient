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
        regTransport.getUserFullInfo = function (data) {
            return requestHelper.post("/UserFullInfo", data);
        };
        return regTransport;
    }
]);
