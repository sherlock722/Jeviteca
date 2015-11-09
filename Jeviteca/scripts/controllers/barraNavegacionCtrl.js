angular.module("Jeviteca").controller ("barraNavegacionCtrl", function ($scope,$route){

    //Se comprueba si la ruta navegada es /albumes
    $scope.rutaAlbumes = function (){

        return $route.current && $route.current.$$route.originalPath === "/albumes";
    };
    //Se comprueba si la ruta navegada es /bandas
    $scope.rutaBandas = function (){

        return $route.current && $route.current.$$route.originalPath === "/bandas";
    };

    $scope.rutaGeneros = function (){

        return $route.current && $route.current.$$route.originalPath === "/generos";
    };

});