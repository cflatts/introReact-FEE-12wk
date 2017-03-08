import React from 'react'

import Banner from './components/banner'

const ArticleView=React.createClass({
    render: function() {
        return (
            <div className='articleView'>
                <Banner/>
                <SearchResults collection={this.props.articleColl}/>
            </div>
        )
    }
})

const SearchResults=React.createClass({

    _makeArticles: function() {
        let jsxArr=[]
        let articleArr=this.props.collection.models

        for(var i=0; i<articleArr.length;i++) {
            jsxArr.push(<Article model={articleArr[i]} key={articleArr[i].cid}/>)
        }
        return jsxArr
    },

    render: function() {
        return (
            <div className='searchResults'>
                {this._makeArticles()}
            </div>
        )
    }
})

const Article=React.createClass({
    render: function() {
        return (
            <div className='article'>
                <h3>{this.props.model.get('headline').main}</h3>
                <h1>By: {this.props.model.get('byline').original}</h1>
            </div>
        )
    }
})

export default ArticleView
