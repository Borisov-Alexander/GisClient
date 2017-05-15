angular.module('gis').service('ModelStateExtension', function () {
    this.$modelState = {
        $isValid: true,
        $isSubmited: false
    }
});