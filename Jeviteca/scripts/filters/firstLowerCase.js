//Filtro que pone la primera letra de una palabra en Minusculas
angular.module("Jeviteca").filter("firstLowerCase", function() {
    return function(text) {
        if(text != null){
            return text.substring(0,1).toLowerCase()+text.substring(1);
        }
    }
});

