angular.module("Jeviteca").service("GenresProvider",
    function($http)
    {
        this.getGenres = function()
            {
                return
                $http.get("data/bands.json");
            };
    });