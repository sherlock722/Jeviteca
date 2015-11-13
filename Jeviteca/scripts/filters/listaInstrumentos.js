angular.module("Jeviteca").filter("listaInstrumentos", function() {
        return function(collection) {
            return collection.join(",");
        };
    });
