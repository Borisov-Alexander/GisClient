angular.module('gis').factory('UserMapper', [
    'UserViewModel',
    function (
        userViewModel
    ) {
        var transformToClient = function (model) {
            var user = new userViewModel();
            user.adress = model.adress;
            user.city = model.city;
            user.country = model.country;
            user.company = model.company;
            user.costomerId = model.costomerId;
            user.description = model.description;
            user.email = model.email;
            user.firstName = model.firstName;
            user.lastName = model.lastName;
            user.userName = model.userNname;
            return user;
        },
        mapInstanceToClient = function (data) {
        return transformToClient(data);
        };

        return {           
            mapInstanceToClient: mapInstanceToClient
        }


    }]);