angular.module('FlickrApp').directive('tags', ['$compile', function($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var tags = attrs.tags.split(' ');
            tags.forEach(function(tag){
                var e = angular.element('<span ng-click="setQuery(\''+tag+'\')" class="label">'+tag+'</span>&nbsp;');
                $compile(e)(scope);
                element.append(e);
            })
        }
    }
}]);