'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Templates = function () {
    function Templates() {
        (0, _classCallCheck3.default)(this, Templates);


        this.template = {
            settings: {
                'category-selector': function categorySelector() {
                    var catList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                    var htmlTemplate = ' \n<label for="category-selector" class="article-headlines">Choose category: </label>\n<select id="category-selector" class="category-selector">\n    <option class="selector-option" value="">All categoties</option>';

                    catList.forEach(function (item) {
                        htmlTemplate += '<option class="selector-option" value="' + item + '">' + item.toUpperCase() + '</option> ';
                    });
                    htmlTemplate += '</select>';

                    return htmlTemplate;
                },
                'language-selector': function languageSelector() {
                    var langList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                    var htmlTemplate = ' \n<select class="language-selector">\n    <option class="selector-option" value="">All languages</option>';

                    langList.forEach(function (item) {
                        htmlTemplate += '<option class="selector-option" value="' + item + '">' + item.toUpperCase() + '</option> ';
                    });
                    htmlTemplate += '</select>';

                    return htmlTemplate;
                },
                'country-selector': function countrySelector() {
                    var countryList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                    var htmlTemplate = ' \n<select class="country-selector">\n    <option class="selector-option" value="">All countries</option>';

                    countryList.forEach(function (item) {
                        htmlTemplate += '<option class="selector-option" value="' + item + '">' + item.toUpperCase() + '</option> ';
                    });
                    htmlTemplate += '</select>';

                    return htmlTemplate;
                },
                button: function button(btnName) {
                    return '<button>' + btnName + '</button>';
                },
                sourceList: {
                    checkbox: function checkbox(cbObject) {
                        var htmlTemplate = ' \n<input type="checkbox" id="' + cbObject.id + '" category="' + cbObject.category + '" />\n<label for="' + cbObject.id + '">' + cbObject.name + '</label>';

                        return htmlTemplate;
                    }
                }
            },
            articles: {
                itemList: function itemList(articleObject) {
                    var htmlTemplate = '\n<a href="' + articleObject.url + '" class="article-item"\n   style="background-image: url(\'' + articleObject.urlToImage + '\'); " >\n' + articleObject.title + '</a>';

                    return htmlTemplate;
                },
                itemDescription: function itemDescription() {}
            }
        };
    }

    Templates.prototype.init = function init() {};

    Templates.prototype.addButton = function addButton(parentElem, btnName, onClickBtn) {
        var tempHtml = this.template.settings.button(btnName);
        var tempDom = document.createElement('div');
        tempDom.innerHTML = tempHtml;

        tempDom.onclick = onClickBtn;

        parentElem.appendChild(tempDom);
    };

    Templates.prototype.addCategory = function addCategory(parentElem, list, onClickHandler) {
        var catHtml = this.template.settings['category-selector'](list);
        var catDom = document.createElement('div');
        catDom.innerHTML = catHtml;
        catDom.classList.add('article-headlines');

        catDom.onchange = onClickHandler;

        parentElem.appendChild(catDom);
    };

    Templates.prototype.addCheckbox = function addCheckbox(parentElem, cbObject, onClickHandler) {
        var cbHtml = this.template.settings.sourceList.checkbox(cbObject);
        var cbDom = document.createElement('div');
        cbDom.innerHTML = cbHtml;

        cbDom.onclick = onClickHandler;

        parentElem.appendChild(cbDom);
    };

    Templates.prototype.addArticle = function addArticle(parentElem, articleObject, onClickHandler) {
        var aHtml = this.template.articles.itemList(articleObject);
        var aDom = document.createElement('div');
        aDom.innerHTML = aHtml;

        aDom.onclick = onClickHandler;

        parentElem.appendChild(aDom);
    };

    Templates.prototype.cleanParentDomList = function cleanParentDomList(parentDom) {
        while (parentDom.firstChild) {
            parentDom.removeChild(parentDom.firstChild);
        }
    };

    Templates.prototype.getSelectorValue = function getSelectorValue(selectName) {
        return document.getElementsByClassName(selectName + '-selector').length ? document.getElementsByClassName(selectName + '-selector')[0].value : '';
    };

    return Templates;
}();

exports.default = Templates;