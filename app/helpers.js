export default class Templates {
    constructor () {

        this.template = {
            settings: {
                'category-selector': (catList = []) => {
                    let htmlTemplate = ` 
<select class="category-selector">
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
                    checkbox: '',
                    article: ''
                }
            }
        };
    }

    init () {
        // document. // TODO : add Button
        /**  Choose options and press Button
         * 1. => view all list (by default 10 items + checkbox [show ALl])
         * After Press Button => filter by category
         * view sources with checkbox [off]
         *
         * 2. After checked => show everything info for right - side
         * with pics + urls <a href + background>
         *
         * 3. After Click => Show Description on Bottom Container
         *
         * 4. Mobile responsive
         *
         * 5. ES6 futures
         *
         * */
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

    getSelectorValue (selectName) {
        return document.getElementsByClassName(`${selectName}-selector`).length
            ? document.getElementsByClassName(`${selectName}-selector`)[0].value
            : '';
    }
}