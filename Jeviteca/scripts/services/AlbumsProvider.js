angular.module("Jeviteca").service("AlbumsProvider", function($http, $q, $filter){

        this.getAlbums = function(){
                return $http.get("data/albums.json");
                //return $http.get(properties.backendUrlAlbum);
        };

        //Obtener el detalle del Album indicado
        this.getAlbum = function(id){

                //Creamos un objeto diferido
                var deferred= $q.defer();

                //Obtenemos la coleccion de albunes
                this.getAlbums().then (function (response){
                   var albums = $filter ("filter")(response.data,{"id" : id});

                        //Resolvemos la promesa con el elemento 0
                        deferred.resolve(albums[0]);
                });
                //retornamos la promesa del objeto diferido
                return deferred.promise;
                //return $http.get ("data/albums.json");
        }
});