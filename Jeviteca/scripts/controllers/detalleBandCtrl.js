angular.module("Jeviteca").controller("detalleBandCtrl", function ($scope, Band){

    $scope.band=Band;

    //Volvemos atras en el historico del navegador
    $scope.volver = function (){

        //Va atras en el historico de navegacion
        history.back();
    };
});
