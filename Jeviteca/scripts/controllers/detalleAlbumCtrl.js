angular.module("Jeviteca").controller("detalleAlbumCtrl", function ($scope, Album){

    $scope.album=Album.data;

    //Volvemos atras en el historico del navegador
    $scope.volver = function (){

        //Va atras en el historico de navegacion
        history.back();

    };
});

