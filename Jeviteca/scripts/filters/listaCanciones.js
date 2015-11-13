angular.module("Jeviteca").filter("listaCanciones", function() {
    return function(collection) {
        return "Tracks:  " + collection.join(",");
    };
});
