export default class Behavior {
    constructor (newsApi, templateApi, dataStore) {
        this.newsApi = newsApi;
        this.templateApi = templateApi;
        this.dataStore = dataStore;
    }

    onInit() {
        this.templateApi.addCategory(document.getElementsByClassName('settings')[0],
            this.newsApi.category,
            () => {
                this.newsApi.getSources({
                    category: this.templateApi.getSelectorValue('category')
                }).then(data => {
                    console.log('updated DATA:', data);

                    this.dataStore.sources = data || [];

                    this.initSources(this.dataStore.sources);
                });
            })
    }

    initSources (list) {
        const parentDom = document.getElementsByClassName('source-list')[0];
        const parentHeadlinesDom = document.getElementsByClassName('headlines-container')[0];
        this.templateApi.cleanParentDomList(parentDom);

        list.forEach((item) => {
            this.templateApi.addCheckbox(parentDom,
                item, (e) => {
                    const checked = e.target.checked;
                    const targetId = e.target.id || e.target.getAttribute('for');

                    checked
                        ? (this.dataStore.choosenSourcesMap[targetId] = targetId)
                        : (delete this.dataStore.choosenSourcesMap[targetId]);

                    this.templateApi.cleanParentDomList(parentHeadlinesDom);
                    this.newsApi.getTopHeadlines({
                        sources: this.dataStore.choosenSourcesMap
                    }).then(data => {
                        data.forEach((item) => {
                            this.templateApi.addArticle(parentHeadlinesDom,
                                item, () => {

                                })
                        })
                    });
                });

        });
    }
}