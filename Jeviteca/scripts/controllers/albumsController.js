angular.module("Jeviteca").controller("albumsController",function ($scope, Albums, $location) {

    $scope.albums = Albums.data;

    //Recibir la notificación para navegar al detalle del album indicado
    $scope.navegar = function (id){

        $location.path ("/detalleAlbum/"+id);

    };

    $scope.stateChanged = function () {
        alert('test');
    };
});