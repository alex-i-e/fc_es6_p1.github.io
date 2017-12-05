import "babel-polyfill";
import 'whatwg-fetch'

import DataStore from './src/dataStore.js';
import Templates from './src/templateApi.js';
import NewsApi from './src/newsApi.js';
import Behavior from './src/behavior.js';

const dataStore = new DataStore();
const templateApi = new Templates();
const newsApi = new NewsApi();
const behavior = new Behavior(newsApi, templateApi, dataStore);

behavior.onInit();
