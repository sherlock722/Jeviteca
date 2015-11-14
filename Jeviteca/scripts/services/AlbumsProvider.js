angular.module("Jeviteca").service("AlbumsProvider", function($http){

        this.getAlbums = function(){
                return $http.get("data/albums.json");
                //return $http.get(properties.backendUrlAlbum);
        };

        //Obtener el detalle del Album indicado
        this.getAlbum = function (id){

                //var album="data/albums.json";
                //return $http.get (album[id]);
                return $http.get("data/albums.json");
        }
});