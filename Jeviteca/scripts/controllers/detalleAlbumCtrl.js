angular.module("Jeviteca").controller("detalleAlbumCtrl", function ($scope, Album){

    $scope.album=Album;

    //Volvemos atras en el historico del navegador
    $scope.volver = function (){

        //Va atras en el historico de navegacion
        history.back();

    };

    /*$scope.getYouTubeLink = function (bandName, trackName)
    {
        var query = encodeURIComponent((bandName + "" + trackName).toLowerCase());
        return "https://www.youtube.com/results?search_query=" + query;
    }*/
});

