angular.module("Jeviteca").controller("bandsController",function ($scope, Bands, $location) {

    $scope.bands = Bands.data;

    //Recibir la notificación para navegar al detalle del album indicado
    $scope.navegar = function (id){

        $location.path ("/detalleBand/"+id);

    };
});