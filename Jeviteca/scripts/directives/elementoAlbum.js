angular.module ("Jeviteca").directive ("elementoAlbum", function(){

    return {

        //Con template / templateUrl establecemos la vista de la directiva
        templateUrl: "views/ElementoAlbum.html",

        //Con scope establecemos la interfaz de comunicación
        scope:{
            album: "=", //Con "=" establecemos enlace bidireccional
            onAlbumClick : "&"  //Con "&" establecemos notificacion desde la directiva al scope padre.
                                //Este onAlbumClick se hace referencia a él en Albums.html
        },
        link: function (scope){
            //Define la interfaz de comunicacion
            scope.notificarClick = function(){

                scope.onAlbumClick({
                    //Valores que quiero pasar fuera
                    id: scope.album.id
                });

            };

        }

    };

});


