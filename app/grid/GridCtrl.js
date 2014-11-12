(function(){

    var GridCtrl = function($scope, $window) {
        $scope.openImage = function (item) {
            $window.open(item.link);
        };
    };
    angular.module('flickrApp').controller('GridCtrl', ['$scope', '$window',GridCtrl]);

}());