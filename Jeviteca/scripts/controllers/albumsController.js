angular.module("Jeviteca").controller("albumsController",function ($scope, Albums) {
    $scope.albums = Albums.data;
});