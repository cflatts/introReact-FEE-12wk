import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'


const app = function() {
  document.querySelector('.container').innerHTML = `<h1>introReact</h1>`
}

var Router = Backbone.Controller.extend({
    routes: {
        'home': '_goHome',
        'detail/:articleID': '_showDetailPage',
        'search/:query': '_doArticleSearch',
        '*catchall': '_redirect'
    },

    _goHome: function() {

    },

    _showDetailPage: function(articleID) {

    },

    _doArticleSearch: function(query) {

    },

    initialize: function() {
        Backbone.history.start()
    }
})

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
