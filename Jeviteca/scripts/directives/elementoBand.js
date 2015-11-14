angular.module("Jeviteca").directive("elementoBand", function() {

    return {


        templateUrl: "views/ElementoBand.html",

        scope:{
            band: "=",
            onBandClick : "&"
        },
        link: function (scope){
            //Define la interfaz de comunicacion
            scope.notificarClick = function(){

                scope.onBandClick({
                    //Valores que quiero pasar fuera
                    id: scope.band.id
                });

            };

        }
    };
});
