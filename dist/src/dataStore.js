'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DataStore = function () {
    function DataStore() {
        (0, _classCallCheck3.default)(this, DataStore);

        this.categoty = '';
        this.sourceList = [];
        this.choosenSources = [];
        this.choosenSourcesMap = {};
        this.articleList = [];
    }

    (0, _createClass3.default)(DataStore, [{
        key: 'sources',
        get: function get() {
            return this.sourceList;
        },
        set: function set(list) {
            this.sourceList = list;
        }
    }, {
        key: 'currentSources',
        get: function get() {
            return this.choosenSources;
        },
        set: function set(list) {
            this.choosenSources = list;
        }
    }, {
        key: 'ctg',
        get: function get() {
            return this.categoty;
        },
        set: function set(newCtg) {
            this.categoty = newCtg;
        }
    }, {
        key: 'articles',
        get: function get() {
            return this.articleList;
        },
        set: function set(list) {
            this.articleList = list;
        }
    }]);
    return DataStore;
}();

exports.default = DataStore;