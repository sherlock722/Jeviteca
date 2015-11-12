angular.module("Jeviteca").directive("elementoBand", function() {

    return {
            templateUrl: "views/ElementoBand.html",

            scope: {
                band: "="
            }
        };
    });
