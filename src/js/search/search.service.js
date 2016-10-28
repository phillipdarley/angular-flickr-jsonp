import angular from 'angular';

//https://www.flickr.com/services/api/response.json.html
const API_URL = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&format=json';
const req = {
    method: 'JSONP',
    url: API_URL,
    callbackKey: 'jsoncallback',
    params: {}
}
class FlickrService {

    constructor($http, $log, $sce) {
        this.$http = $http;
        this.$log = $log;

        $sce.trustAsResourceUrl(API_URL);
    }

    getImagesByTagText(text) {
        //add text search query param to url
        req.params.tags = text;

        let self = this;
        let promise = this.$http(req)
            .then(function (result) {
                return self._parseSearchResult(result.data);
            },
            function (error) {
                self.$log.error(error);
            });

        return promise;
    }

    _parseSearchResult(result) {

        let searchResults = [];

        result.items.forEach((item) => {
            let imageResult = {
                imageUrl: item.media.m,
                fullImageHref: item.link,
                author: item.author
            }
            searchResults.push(imageResult);
        });

        return searchResults;
    }

}
FlickrService.$inject = ['$http', '$log', '$sce'];

export default FlickrService;