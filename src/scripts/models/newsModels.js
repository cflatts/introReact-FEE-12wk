import Backbone from 'backbone'
import $ from 'jquery'

export const ArticleCollection=Backbone.Collection.extend({
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    _key: 'fa162f9ec488494abf21f3f3b2225849',

    parse: function(apiResp) {
        return apiResp.response.docs
    }
})
