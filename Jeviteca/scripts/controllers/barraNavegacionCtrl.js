angular.module("Jeviteca").controller ("barraNavegacionCtrl", function ($scope,$route){

    //Se comprueba si la ruta navegada es /albums
    $scope.rutaAlbums = function (){

        return $route.current && $route.current.$$route.originalPath === "/albums";
    };
    //Se comprueba si la ruta navegada es /bandas
    $scope.rutaBands = function (){

        return $route.current && $route.current.$$route.originalPath === "/bands";
    };

    $scope.rutaGenres = function (){

        return $route.current && $route.current.$$route.originalPath === "/genres";
    };

});