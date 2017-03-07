import Backbone from 'backbone'
import $ from 'jquery'

const ArticleCollection=Backbone.Collection.extend({
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    _key: '11eaa2ee2ebb78f1cfb25971ad39c74d',

    parse: function(apiResp) {
        return apiResp.response.docs
    }
})

export {ArticleCollection}
