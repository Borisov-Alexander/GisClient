angular.module('gis').factory('UserMapper', [
    'UserViewModel',
    function (userViewModel) {
        var mapUserToServerModel = function (model) {
            return {
                Adress: model.adress,
                City: model.city,
                Country: model.country,
                Company: model.company,
                CustomerId: model.costomerId,
                Description: model.description,
               
                FirstName: model.firstName,
                LastName: model.lastName,
                UserName: model.userN 
            }
        },mapUserToClientModel = function (model) {
            return {
                Adress: model.adress,
                City: model.city,
                Country: model.country,
                Company: model.company,
                CustomerId: model.costomerId,
                Description: model.description,
                Email: model.email,
                FirstName: model.firstName,
                LastName: model.lastName,
                UserName: model.userName
            }
        }
        return {
            mapUserToServerModel: mapUserToServerModel,
            mapUserToClientModel: mapUserToClientModel
        }


    }]);