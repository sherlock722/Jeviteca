angular.module("Jeviteca").directive("elementoGenre", function() {

    return {
        templateUrl: "views/ElementoGenre.html",

        scope: {
            genre: "="
        }
    };
});
