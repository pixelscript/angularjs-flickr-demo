angular.module('FlickrApp').controller('SearchCtrl', ['$scope', '$sce','flickrPhotos', function ($scope, $sce, flickrPhotos) {

    $scope.query = 'ridgeback';
    $scope.search = function () {
        $scope.flickrSearch = flickrPhotos.load({ tags: $scope.query });
    };
    $scope.search();
    $scope.openImage = function(item){
        window.open(item.link);
    };
    $scope.setQuery = function(val) {
        $scope.query = val;
        $scope.search();
    }

}]);