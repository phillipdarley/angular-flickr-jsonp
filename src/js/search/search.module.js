import angular from 'angular';
import searchComponent from './search.component';
import searchService from './search.service';
import './search.less'

export default angular.module('app.search', [])
    .component('pdSearch', searchComponent)
    .service('searchService', searchService)
    .name;