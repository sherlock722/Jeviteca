angular.module("Jeviteca").controller("bandsController",function ($scope, Bands) {
    $scope.bands = Bands.data;
});