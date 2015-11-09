//Se define la aplicacion
angular.module("Jeviteca",[]);

//Definir la ruta de Albumes
angular.module("Jeviteca").config(function($routeProvider) {
    $routeProvider.when("/albumes", {
        controller: "AlbumesController",
        templateUrl: "views/Albumes.html",
        resolve: {
            Bands: ["AlbumesProvider",
                function (AlbumesProvider) {
                    return
                    AlbumesProvider.getAlbumes();
                }]
        }
    });
});

//Definir la ruta de Bandas
angular.module("Jeviteca").config(function($routeProvider) {
    $routeProvider.when("/bandas", {
        controller: "BandasController",
        templateUrl: "views/Bandas.html",
        resolve: {
            Bands: ["BandasProvider",
                function (BandasProvider) {
                    return
                    BandasProvider.getBandas();
                }]
        }
    });
});

//Definir la ruta de Géneros
angular.module("Jeviteca").config(function($routeProvider) {
    $routeProvider.when("/generos", {
        controller: "GenerosController",
        templateUrl: "views/Generos.html",
        resolve: {
            Bands: ["BandsProvider",
                function (GenerosProvider) {
                    return
                    GenerosProvider.getGeneros();
                }]
        }
    });
});

//Se configura una ruta por defecto
$routeProvider.otherwise({
    redirectTo: "/albumes"
});