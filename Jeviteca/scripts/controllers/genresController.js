angular.module("Jeviteca").controller("genresController",function ($scope, Genres) {
    $scope.genres = Genres.data;
});