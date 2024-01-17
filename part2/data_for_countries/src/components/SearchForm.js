import React from 'react'

function SearchForm ( { searchQuery, setSearchQuery } )
{
    return (
        <div>
            <input
                type="text"
                value={ searchQuery }
                onChange={ ( e ) => setSearchQuery( e.target.value ) }
                placeholder="Enter country name"
            />
        </div>
    )
}

export default SearchForm
