'use strict';

require('babel-polyfill');

require('whatwg-fetch');

var _dataStore = require('./src/dataStore.js');

var _dataStore2 = _interopRequireDefault(_dataStore);

var _templateApi = require('./src/templateApi.js');

var _templateApi2 = _interopRequireDefault(_templateApi);

var _newsApi = require('./src/newsApi.js');

var _newsApi2 = _interopRequireDefault(_newsApi);

var _behavior = require('./src/behavior.js');

var _behavior2 = _interopRequireDefault(_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataStore = new _dataStore2.default();
var templateApi = new _templateApi2.default();
var newsApi = new _newsApi2.default();
var behavior = new _behavior2.default(newsApi, templateApi, dataStore);

behavior.onInit();