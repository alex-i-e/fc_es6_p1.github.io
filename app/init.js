export default class NewsApi {
    constructor () {
        this.baseUrl = 'https://newsapi.org/v2/';
        this.apiType = {
            top: 'top-headlines',
            all: 'everything',
            source: 'sources',
        };

        this.currentNews = [];

        this.apiKey = '51567f5e32f747b48f1ec3620f0c1f0a';

        this.category = [ // Default: all categories returned
            'business',
            'entertainment',
            'gaming',
            'general',
            'health-and-medical',
            'music',
            'politics',
            'science-and-nature',
            'sport',
            'technology'
        ];
        this.language = [
            'ar', 'en', 'cn', 'de', 'es', 'fr', 'he', 'it', 'nl', 'no', 'pt', 'ru', 'sv', 'ud'
        ];
        this.country = [
            'ar', 'au', 'br', 'ca', 'cn', 'de', 'es', 'fr', 'gb', 'hk', 'ie', 'in', 'is', 'it', 'nl', 'no', 'pk', 'ru', 'sa', 'sv', 'us', 'za'
        ];

        this.articleBlog = {
            source: { // The identifier id and a display name name for the source this article came from.
                id: '',
                name: ''
            },
            author: '',
            title: '',
            description: '',
            url: '', // The direct URL to the article.
            urlToImage: '', // The URL to a relevant image for the article.
            publishedAt: '' // The date and time that the article was published, in UTC (+000)
        };
        this.articleSource = {
            id: '',
            name: '',
            description: '',
            url: '', // The direct URL to the article.
            category: '', // The URL to a relevant image for the article.
            language: '', // The URL to a relevant image for the article.
            country: '' // The date and time that the article was published, in UTC (+000)
        };

        this.config = {
            // https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey={API_KEY}
            // https://newsapi.org/v2/top-headlines?sources=the-next-web,the-verge&apiKey={API_KEY}
            // https://newsapi.org/v2/top-headlines?q=trump&apiKey={API_KEY}
            // https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey={API_KEY}
            // https://newsapi.org/v2/top-headlines
            'top-headlines': {
                requestParamsObject: {
                    sources: '', // A comma-seperated string of identifiers (maximum 20),
                    q: '', // Keywords or phrase to search for.
                    category: [], // Default: all categories returned.
                    language: [], // Default: all languages returned.
                    country: [], // Default: all countries returned.
                    apiKey: '' // Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
                },
                requestParamsList: [
                    'sources',
                    'q',
                    'category',
                    'language',
                    'country',
                    'apiKey'
                ],
                responseParamsObject: {
                    status: '', // Options: ok, error. In the case of error a code and message property will be populated
                    articles: [] // array[article]
                }
            },
            // https://newsapi.org/v2/everything?q=bitcoin&apiKey={API_KEY}
            // https://newsapi.org/v2/everything?q=apple&from=2017-11-25&to=2017-11-25&sortBy=popularity&apiKey={API_KEY}
            // https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&apiKey={API_KEY}
            'everything': {
                requestParamsObject: {
                    /** q
                     * Surround phrases with quotes (") for exact match.
                     * Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
                     * Prepend words that must not appear with a - symbol. Eg: -bitcoin
                     * Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
                     * The complete value for q must be URL-encoded */
                    q: '',
                    /** sources
                     * A comma-seperated string of identifiers (maximum 20)
                     * for the news sources or blogs you want headlines from */
                    sources: '',
                    /** domains
                     * A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com)
                     * to restrict the search to. */
                    domains: '',
                    /** from
                     * A date and optional time for the oldest article allowed.
                     * This should be in ISO 8601 format (e.g. 2017-11-26 or 2017-11-26T10:36:19)
                     * Default: the oldest according to your plan. */
                    from: '',
                    /** A date and optional time for the newest article allowed.
                     * This should be in ISO 8601 format (e.g. 2017-11-26 or 2017-11-26T10:36:19)
                     * Default: the newest according to your plan. */
                    to: '',
                    /** Default: all languages returned.  */
                    language: [],
                    /**  Possible options: relevancy, popularity, publishedAt.
                     relevancy = articles more closely related to q come first.
                     popularity = articles from popular sources and publishers come first.
                     publishedAt = newest articles come first.
                     Default: publishedAt */
                    sortBy: '',
                    /** Use this to page through the results. 20 articles are returned on a page. */
                    page: '',
                    /** Your API key. Alternatively you can provide this via the X-Api-Key HTTP header. */
                    apiKey: ''

                },
                requestParamsList: [
                    'q',
                    'sources',
                    'domains',
                    'from',
                    'to',
                    'language',
                    'sortBy',
                    'page',
                    'apiKey'
                ],
                responseParamsObject: {
                    status: '', // Options: ok, error. In the case of error a code and message property will be populated
                    articles: [] // array[article]
                }
            },
            // https://newsapi.org/v2/sources?apiKey={API_KEY}
            // https://newsapi.org/v2/sources?language=en&apiKey={API_KEY}
            // https://newsapi.org/v2/sources?language=en&country=us&apiKey={API_KEY}
            'sources': {
                requestParamsObject: {
                    category: 'category',
                    language: 'language',
                    country: 'country',
                    apiKey: 'apiKey'

                },
                requestParamsList: [
                    'category',
                    'language',
                    'country',
                    'apiKey',
                ],
                responseParamsObject: {
                    status: '', // Options: ok, error. In the case of error a code and message property will be populated
                    articles: [] // array[article]
                }
            }
        };
    }

    get apiHeaders () {
        return new Headers();
    }

    get apiOptions () {
        return { method: 'GET',
            headers: this.apiHeaders,
            mode: 'cors',
            cache: 'default'
        };
    }

    getSources (prop = {}) {
        let url = `${this.baseUrl}${this.apiType.source}?${this.apiKeyAttr}`;

        Object.keys(prop).forEach((item) => {
            let cat = 'category=';
            switch (item) {
                case 'category':
                    cat += prop[item];
                    break;
                default:
            }

            url += `&${cat}`;
        });

        return fetch( url, this.apiOptions)
            .then(data => data.json())
            .then(data => {
                return data.status === 'ok' ? data.sources : [];
            });
    }

    getTopHeadlines (prop = {}) {
        let url = `${this.baseUrl}${this.apiType.top}?${this.apiKeyAttr}`;

        Object.keys(prop).forEach((item) => {
            let cat = 'sources=';
            switch (item) {
                case 'sources':
                    cat += Object.keys(prop[item]).join(',');
                    break;
                default:
            }

            url += `&${cat}`;
        });

        return fetch( url, this.apiOptions)
            .then(data => data.json())
            .then(data => {
                this.currentNews = data.articles || [];
                return data.status === 'ok' ? data.articles : [];
            });
    }

    get apiKeyAttr () {
        return `${this.config.sources.requestParamsObject.apiKey}=${this.apiKey}`;
    }
}