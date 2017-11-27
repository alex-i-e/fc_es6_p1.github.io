export default class Templates {
    constructor () {

        this.template = {
            settings: {
                'category-selector': (catList = []) => {
                    let htmlTemplate = `
<label for="category-selector">Choose category: </label>
<select id="category-selector" class="category-selector">
    <option class="selector-option" value="">All categories</option>`;

                    catList.forEach((item) => {
                        htmlTemplate += `<option class="selector-option" value="${item}">${item.toUpperCase()}</option> `;
                    });
                    htmlTemplate += `</select>`;

                    return htmlTemplate;
                },
                'language-selector': (langList = []) => {
                    let htmlTemplate = ` 
<select class="language-selector">
    <option class="selector-option" value="">All languages</option>`;

                    langList.forEach((item) => {
                        htmlTemplate += `<option class="selector-option" value="${item}">${item.toUpperCase()}</option> `;
                    });
                    htmlTemplate += `</select>`;

                    return htmlTemplate;

                    return htmlTemplate;
                },
                'country-selector': (countryList = []) => {
                    let htmlTemplate = ` 
<select class="country-selector">
    <option class="selector-option" value="">All countries</option>`;

                    countryList.forEach((item) => {
                        htmlTemplate += `<option class="selector-option" value="${item}">${item.toUpperCase()}</option> `;
                    });
                    htmlTemplate += `</select>`;

                    return htmlTemplate;
                },
                button: (btnName) => {
                    return `<button>${btnName}</button>`;
                },
                sourceList: {
                    checkbox: (cbName) => {
                        let htmlTemplate = ` 
<input type="checkbox">${cbName}</input>`;
                    }
                }
            },
            articles: {
                itemList: (articleObject) => {
                    let htmlTemplate = `
<a href="${articleObject.url}" 
   style="background-image: url(\"${articleObject.urlToImage}\"); width=100px;height=100px;" >
${articleObject.title}</a>`;



                    return htmlTemplate;
                },
                itemDescription: () => {

                }
            }
        }
        ;
    }

    init () {
    }

    addButton (parentElem, btnName, onClickBtn) {
        let tempHtml = this.template.settings.button(btnName);
        let tempDom = document.createElement('div');
        tempDom.innerHTML = tempHtml;

        tempDom.onclick = onClickBtn;

        parentElem.append(tempDom);
    }

    addCategory (parentElem, list, onClickHandler) {
        let catHtml = this.template.settings['category-selector'](list);
        let catDom = document.createElement('div');
        catDom.innerHTML = catHtml;

        catDom.onclick = onClickHandler;

        parentElem.append(catDom);
    }

    addCheckbox (parentElem, cbObject, onClickHandler) {
        let cbHtml = this.template.settings.sourceList.checkbox(cbObject);
        let cbDom = document.createElement('div');
        cbDom.innerHTML = cbHtml;

        cbDom.onclick = onClickHandler;

        parentElem.append(cbDom);
    }

    addArticle(parentElem, articleObject, onClickHandler) {
        let aHtml = this.template.articles.itemList(articleObject);
        let aDom = document.createElement('div');
        aDom.innerHTML = aHtml;

        aDom.onclick = onClickHandler;

        parentElem.append(aDom);
    }

    cleanParentDomList (parentDom) {
        while (parentDom.firstChild) {
            parentDom.removeChild(parentDom.firstChild);
        }
    }

    getSelectorValue (selectName) {
        return document.getElementsByClassName(`${selectName}-selector`).length
            ? document.getElementsByClassName(`${selectName}-selector`)[0].value
            : '';
    }
}