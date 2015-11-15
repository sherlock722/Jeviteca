angular.module("Jeviteca").controller("albumsController",function ($scope, Albums, $location) {

    $scope.albums = Albums.data;

    //Recibir la notificación para navegar al detalle del album indicado
    $scope.navegar = function (id){

        $location.path ("/detalleAlbum/"+id);

    };

    //Check
    $scope.stateChanged = function (valor) {

        if (typeof(Storage) !== "undefined") {
            //alert("valor:" + valor);

            if(valor ==true) {
                valor = "true";
            } else {
                valor = "false";
            }

            //Guardar los datos
            localStorage.setItem("favBands", JSON.stringify(valor));

            //Recuperar los datos
            //JSON.parse(localStorage.getItem("favBands"));
        }

    };
});