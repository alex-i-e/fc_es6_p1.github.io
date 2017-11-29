export default class DataStore {
    constructor () {
        this.categoty = '';
        this.sourceList = [];
        this.choosenSources = [];
        this.choosenSourcesMap = {};
        this.articleList = [];
    }

    get sources () {
        return this.sourceList;
    }
    set sources (list) {
        this.sourceList = list;
    }

    get currentSources () {
        return this.choosenSources;
    }
    set currentSources (list) {
        this.choosenSources = list;
    }

    get ctg () {
        return this.categoty;
    }
    set ctg (newCtg) {
        this.categoty = newCtg;
    }

    get articles () {
        return this.articleList;
    }
    set articles (list) {
        this.articleList = list;
    }
}