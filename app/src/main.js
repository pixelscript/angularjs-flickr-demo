var Flickr = angular.module('FlickrApp', ['ngRoute','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/grid', {
                templateUrl: 'views/grid.html'
            })
            .when('/list', {
                templateUrl: 'views/list.html'
            })
            .otherwise({
                redirectTo: '/grid'
            });
    });