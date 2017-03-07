import React from 'react'


const Banner=React.createClass({
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
