import angular from 'angular';

class SearchController {

    constructor(searchService) {
        this.searchService = searchService;
    }

    $onInit() {
        this._searchText = '';
        this.searchResults = [];
    }

    search(text) {
        let self = this;
        this.searchService.getImagesByTagText(text).then(function (searchResults) {
            self.searchResults = searchResults;
        });
    }
    // get & set -> a replacement for self.$watch
    get searchText() {
        return this._searchText;
    }

    set searchText(text) {
        this._searchText = text;

        //TODO: something more performant than making a JSONP req on every model change
        if (!text || text.length !== 0) {
            this.search(this._searchText);
        }


    }
}

SearchController.$inject = ['searchService']

export default SearchController;