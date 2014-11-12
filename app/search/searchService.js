(function () {
    var SearchService = function ($http, $q) {
        var search = {};
        search.query = function (tags) {
            var options = {
                tags : tags,
                format : 'json',
                jsoncallback : 'JSON_CALLBACK'
            };
            return $http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', {params: options});
        };
        return search;
    };


    angular
        .module('flickrApp')
        .factory('SearchService', [
            '$http',
            '$q',
            SearchService
        ]);
}());

//    return $resource('http://api.flickr.com/services/feeds/photos_public.gne', { format: 'json', jsoncallback: 'JSON_CALLBACK' }, { 'load': { 'method': 'JSONP' } });