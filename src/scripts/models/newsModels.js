import Backbone from 'backbone'
import $ from 'jquery'

export const ArticleCollection=Backbone.Collection.extend({
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    _key: '0c850d5c48704da38b87c2c889669f43',

    parse: function(apiResp) {
        return apiResp.response.docs
    }
})
