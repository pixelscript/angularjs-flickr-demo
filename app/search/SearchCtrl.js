(function () {

    var SearchCtrl = function ($scope, $window, SearchService) {

        $scope.query = 'ridgeback';

        $scope.search = function () {
            SearchService.query($scope.query).then(function (response) {
                $scope.results = response.data.items;
            });
        };

        $scope.setQuery = function (val) {
            $scope.query = val;
            $scope.search();
        };

        $scope.search();

    };

    angular.module('flickrApp').
        controller('SearchCtrl', ['$scope', '$window', 'SearchService', SearchCtrl]);

}());