var Flickr = angular.module('flickrApp', ['ngRoute','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/grid', {
                templateUrl: 'grid/gridView.html',
                controller:'GridCtrl'
            })
            .when('/list', {
                templateUrl: 'list/listView.html'
            })
            .otherwise({
                redirectTo: '/grid'
            });
    });