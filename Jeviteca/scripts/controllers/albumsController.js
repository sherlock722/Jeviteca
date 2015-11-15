angular.module("Jeviteca").controller("albumsController",function ($scope, Albums, $location) {

    $scope.albums = Albums.data;

    //Recibir la notificación para navegar al detalle del album indicado
    $scope.navegar = function (id){

        $location.path ("/detalleAlbum/"+id);

    };

    //Check
    $scope.stateChanged = function (id,valor) {

        if (typeof(Storage) !== "undefined") {

            alert("id:" + id + "valor:" + valor);
            valor = valor === true ? "true" : "false";

            //Guardar los datos
            var key = "favBands" + id
            localStorage.setItem(key, valor);

            //Recuperar los datos
            //JSON.parse(localStorage.getItem("favBands"));
        }

    };
});