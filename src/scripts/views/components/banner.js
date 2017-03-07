import React from 'react'


const Banner=React.createClass({

    _handleSearch: function(evt) {
        // evt.preventDefault()

        if(evt.keyCode === 13) {
            location.hash = `search/${evt.target.value}`
            evt.target.value=''
        }
    },

    render: function() {
        return (
            <div className='banner'>
                <h1>The Peoples News</h1>
                <input type='text' onKeyDown={this._handleSearch}/>
                <a href='#home'>Home</a>
            </div>
        )
    }
})

export default Banner
