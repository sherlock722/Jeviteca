angular.module("Jeviteca").service("BandsProvider", function($http,$q,$filter) {

        this.getBands = function() {

            return $http.get("data/bands.json");

        };

    //Obtener el detalle de la Banda indicado
    this.getBand = function(id){

        //Creamos un objeto diferido
        var deferred= $q.defer();

        //Obtenemos la coleccion de bandas
        this.getBands().then (function (response){
            var bands = $filter ("filter")(response.data,{"id" : id});

            //Resolvemos la promesa con el elemento 0
            deferred.resolve(bands[0]);
        });
        //retornamos la promesa del objeto diferido
        return deferred.promise;

    }
});
