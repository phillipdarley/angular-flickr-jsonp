import angular from 'angular'
import homeComponent from './home.component';
import searchModule from '../search/search.module';

export default angular.module('app.home', [searchModule])
    .component('pdHome', homeComponent)
    .name;