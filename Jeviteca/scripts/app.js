//Se define la aplicacion
angular.module("Jeviteca",["ngRoute"]);


angular.module("Jeviteca").config(function($routeProvider) {

    //Definir la ruta de Albumes
    $routeProvider.when("/albums", {
        controller: "albumsController",
        templateUrl: "views/Albums.html",
        resolve: {
            Albums: ["AlbumsProvider", function (AlbumsProvider) {
                    return AlbumsProvider.getAlbums();
                }]
        }
    });

    //Definir la ruta de Bandas
    $routeProvider.when("/bands", {
        controller: "bandsController",
        templateUrl: "views/Bands.html",
        resolve: {
            Bands: ["BandsProvider", function (BandsProvider) {
                    return BandsProvider.getBands();
                }]
        }
    });

    //Definir la ruta de Géneros
    $routeProvider.when("/genres", {
        controller: "genresController",
        templateUrl: "views/Genres.html",
        resolve: {
            Genres: ["GenresProvider", function (GenresProvider) {
                    return GenresProvider.getGenres();
                }]
        }
    });

    //Se configura una ruta por defecto
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });
});