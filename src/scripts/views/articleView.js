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

    _toggleParagraph: function() {
        this.setState({
            pShowing: true
        })
    },

    getInitialState: function() {
        return {
            pShowing: false
        }
    },

    render: function() {

        let paraStyle={
            display: 'none'
        }

        if(this.state.pShowing) {
            paraStyle.display = 'block'
        }

        return (
            <div className='article'>
                <h3>{this.props.model.get('headline').main}</h3>
                <h5>{this.props.model.get('byline').original}</h5>
                <button>+</button>
                <p style={paraStyle} onClick={this._toggleParagraph}>{this.props.model.get('lead_paragraph')}</p>
                <hr/>
            </div>
        )
    }
})

export default ArticleView
