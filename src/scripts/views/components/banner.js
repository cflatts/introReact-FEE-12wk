import React from 'react'


const Banner=React.createClass({

    _handleSearch: function(evt) {
        evt.preventDefault()

        evt.keyCode === 13 ? location.hash = `search/${evt.target.value}`: location.hash='home'
    },

    render: function() {
        return (
            <div className='banner'>
                <h1>The People`'`s News</h1>
                <input type='text' onKeyDown={this._handleSearch}/>
                <a href='#home'>Home</a>
            </div>
        )
    }
})

export default Banner
