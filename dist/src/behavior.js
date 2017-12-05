'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Behavior = function () {
    function Behavior(newsApi, templateApi, dataStore) {
        (0, _classCallCheck3.default)(this, Behavior);

        this.newsApi = newsApi;
        this.templateApi = templateApi;
        this.dataStore = dataStore;
    }

    Behavior.prototype.onInit = function onInit() {
        var _this = this;

        this.templateApi.addCategory(document.getElementsByClassName('settings')[0], this.newsApi.category, function () {
            _this.templateApi.cleanParentDomList(document.getElementsByClassName('headlines-container')[0]);

            _this.newsApi.getSources({
                category: _this.templateApi.getSelectorValue('category')
            }).then(function (data) {
                _this.dataStore.sources = data || [];
                _this.initSources(_this.dataStore.sources);
            });
        });
    };

    Behavior.prototype.initSources = function initSources(list) {
        var _this2 = this;

        var parentDom = document.getElementsByClassName('source-list')[0];
        var parentHeadlinesDom = document.getElementsByClassName('headlines-container')[0];
        this.templateApi.cleanParentDomList(parentDom);

        list.forEach(function (item) {
            _this2.templateApi.addCheckbox(parentDom, item, function (e) {
                var checked = e.target.checked;
                var targetId = e.target.id || e.target.getAttribute('for');

                checked ? _this2.dataStore.choosenSourcesMap[targetId] = targetId : delete _this2.dataStore.choosenSourcesMap[targetId];

                _this2.templateApi.cleanParentDomList(parentHeadlinesDom);
                _this2.newsApi.getTopHeadlines({
                    sources: _this2.dataStore.choosenSourcesMap
                }).then(function (data) {
                    data.forEach(function (item) {
                        _this2.templateApi.addArticle(parentHeadlinesDom, item, function () {});
                    });
                });
            });
        });
    };

    return Behavior;
}();

exports.default = Behavior;