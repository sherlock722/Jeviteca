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

    //Definir la ruta de detalle de Album
    //Se pasa el parametro id (se hace con :)
    $routeProvider.when ("/detalle/:id",{

        controller:"detalleAlbumCtrl",
        templateUrl: "views/detalleAlbum.html",
        resolve: {
            //Propiedades y dependencias (se ejecuta previa a la navegacion)
            Album: ["AlbumsProvider", "$route", function (AlbumsProvider,$route){ //Notacion de array en linea
                return AlbumsProvider.getAlbum($route.current.params.id);
                //return AlbumsProvider.getAlbum(id);
            }]
        }
    });

    //Se configura una ruta por defecto
    $routeProvider.otherwise({
        redirectTo: "/albums"
    });
});