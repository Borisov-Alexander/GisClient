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
        regTransport.getMessageCount = function () {
            return requestHelper.get("/api/Account/GetMessageCount");
        };
        regTransport.getAllMessage = function () {
            return requestHelper.get("/api/Account/GetAllMessage");
        };
        regTransport.updUser = function (data) {
            return requestHelper.post("/api/Account/UpdUser", data);
        };
        regTransport.addMessage = function (data) {
            return requestHelper.post("/api/Account/AddMessage", data);
        };
        regTransport.getFactoryByEmail = function () {
            return requestHelper.get("/api/Factory/GetFactoryByEmail");
        };
        regTransport.getFactoryById = function (data) {
            return requestHelper.post("/api/Factory/FactoryById/" + data +"/info");
        };
        regTransport.getMaterialByName = function (data) {
            return requestHelper.post("/api/Material/MaterialByName/" + data + "/info");
        };
        regTransport.getMaterialById = function (data) {
            return requestHelper.post("/api/Material/MaterialById/" + data + "/info");
        };

        regTransport.getAllFactory = function () {
            return requestHelper.get("/api/Factory/GetAllFactory");
        };
        regTransport.getAllMaterial = function () {
            return requestHelper.get("/api/Material/getAllMaterial");
        };
        regTransport.getMaterialCount = function () {
            return requestHelper.get("/api/Material/getMaterialCount");
        };
        regTransport.addFactory = function (data) {
            return requestHelper.post("/api/Factory/AddFactory", data);
        };
        regTransport.addMaterial = function (data) {
            return requestHelper.post("/api/Material/addMaterial", data);
        };
        regTransport.logout = function () {
            return requestHelper.post("/api/Account/Logout");
        };
        regTransport.incrByFactory = function (data) {
            return requestHelper.post("/api/Factory/incrByFactory/" + data + "/info");
        };
        regTransport.incrByMaterial = function (data) {
            return requestHelper.post("/api/Factory/incrByMaterial/" + data + "/info");
        };
        regTransport.getViewsCount = function () {
            return requestHelper.get("/api/Factory/GetViewsCount");
        };





        return regTransport;
    }
]);
