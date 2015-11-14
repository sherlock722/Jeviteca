angular.module("Jeviteca").controller("albumsController",function ($scope, Albums, $location) {

    $scope.albums = Albums.data;


    //Recibir la notificación para navegar al detalle del album indicado
    $scope.navegar = function (id){

        //alert ("Navegar al Album" + id)
        $location.path ("/detalle/"+id );

    }
});