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
    render: function() {
        return (
            <div className='searchResults'>

            </div>
        )
    }
})

export default ArticleView
