import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import {ArticleCollection} from './models/newsModels'
import HomeView from './views/homeView'
import ArticleView from './views/ArticleView'


const app=function() {
    const Router=Backbone.Router.extend({
        routes: {
            'home': '_showHome',
            'detail/:articleID': '_showDetailPage',
            'search/:query': '_doArticleSearch',
            '*default': '_default'
        },

        _showHome: function() {
            ReactDOM.render(<HomeView/>, document.querySelector('.container'))
        },

        _showDetailPage: function(articleID) {

        },

        _doArticleSearch: function(query) {

        },

        _default: function() {
            location.hash='search/today'
        },

        initialize: function() {
            Backbone.history.start()
        }
    })

    new Router()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
