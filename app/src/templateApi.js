export default class Templates {
    constructor () {

        this.template = {
            settings: {
                'category-selector': (catList = []) => {
                    let htmlTemplate = ` 
<label for="category-selector" class="article-headlines">Choose category: </label>
<select id="category-selector" class="category-selector">
    <option class="selector-option" value="">All categoties</option>`;

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
                    checkbox: (cbObject) => {
                        const htmlTemplate = ` 
<input type="checkbox" id="${cbObject.id}" category="${cbObject.category}" />
<label for="${cbObject.id}">${cbObject.name}</label>`;

                        return htmlTemplate;
                    }
                }
            },
            articles: {
                itemList: (articleObject) => {
                    const htmlTemplate = `
<a href="${articleObject.url}" class="article-item"
   style="background-image: url(\'${articleObject.urlToImage}\'); " >
${articleObject.title}</a>`;



                    return htmlTemplate;
                },
                itemDescription: () => {}
            }
        };
    }

    init () {}

    addButton (parentElem, btnName, onClickBtn) {
        const tempHtml = this.template.settings.button(btnName);
        const tempDom = document.createElement('div');
        tempDom.innerHTML = tempHtml;

        tempDom.onclick = onClickBtn;

        parentElem.append(tempDom);
    }


    addCategory (parentElem, list, onClickHandler) {
        const catHtml = this.template.settings['category-selector'](list);
        const catDom = document.createElement('div');
        catDom.innerHTML = catHtml;

        catDom.onchange = onClickHandler;

        parentElem.append(catDom);
    }

    addCheckbox (parentElem, cbObject, onClickHandler) {
        const cbHtml = this.template.settings.sourceList.checkbox(cbObject);
        const cbDom = document.createElement('div');
        cbDom.innerHTML = cbHtml;

        cbDom.onclick = onClickHandler;

        parentElem.append(cbDom);
    }

    addArticle(parentElem, articleObject, onClickHandler) {
        const aHtml = this.template.articles.itemList(articleObject);
        const aDom = document.createElement('div');
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