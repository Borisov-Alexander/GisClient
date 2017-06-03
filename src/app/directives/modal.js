angular.module('gis').directive("modalDialog", [
    function () {
        return {
            restrict: "E",
            scope: {
                show: '='
            },
            replace: true, // Замените на шаблон
            transclude: true, // мы хотим вставлять пользовательский контент внутри директивы
            link: function (scope, element, attrs) {
                scope.dialogStyle = {};

                if (attrs.width) {
                    scope.dialogStyle.width = attrs.width;
                }

                if (attrs.height) {
                    scope.dialogStyle.height = attrs.height;
                }

                scope.hideModal = function () {
                    scope.show = false;
                };
            },
            templateUrl: "app/views/directives/modalDialog.html"
        };
    }
]);