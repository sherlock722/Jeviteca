//Filtro para poner una palabra en MAYUSCULAS
angular.module("Jeviteca").filter("upperCase", function() {
    return function(text) {

        if (text != null) {
            return text.toUpperCase();
        }
    }
});


