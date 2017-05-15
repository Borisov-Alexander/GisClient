angular.module('gis').factory('UserViewModel', ['ModelStateExtension', function (modelStateExtension) {
    var userViewModel = function () {
        this.adress = '';
        this.city = '';
        this.country = null;
        this.customerId = '';
        this.description = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.company = null;
        this.userName = null;
    }
    angular.extend(userViewModel.prototype, modelStateExtension);
    return contactInfoViewModel;
}]);