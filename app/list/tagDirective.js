(function () {
    var tagRenderer = function ($compile) {
        return {
            restrict: 'A',
            scope: {
                clickAction: '=',
                tagsRenderer: '='
            },
            link: function (scope, element, attrs) {
                var tags = scope.tagsRenderer.split(' ');
                tags.forEach(function (tag) {
                    var e = angular.element('<span ng-click="clickAction(\'' + tag + '\')" class="label">' + tag + '</span>&nbsp;');
                    $compile(e)(scope);
                    element.append(e);
                })
            }
        }
    };
    angular
        .module('flickrApp')
        .directive('tagsRenderer', [ '$compile', tagRenderer]);
}());