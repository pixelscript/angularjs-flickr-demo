(function () {
    var SearchService = function ($http, $q) {
        var search = {};
        search.query = function (tags) {
            var deferred = $q.defer();
            var options = {
                tags : tags,
                format : 'json',
                jsoncallback : 'JSON_CALLBACK'
            };
            $http.jsonp('http://api.flickr.com/services/feeds/photos_public.gne', {params: options})
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
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