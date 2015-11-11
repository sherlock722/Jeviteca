angular.module ("Jeviteca").directive ("elementoAlbum", function(){

    return {

        //Con template / templateUrl establecemos la vista de la directiva
        templateUrl: "views/ElementoAlbum.html",

        //Con scope establecemos la interfaz de comunicación
        scope:{
            album: "=" //Con "=" establecemos enlace bidireccional
        }
    };

});


