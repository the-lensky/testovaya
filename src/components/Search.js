import React, { useState } from 'react'
import './search.css'

const Search = ({getImages, query, setQuery}) => {

    // const [query, setQuery] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
    }

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            getImages(query)
        }
    }

    return (
        <div className='row '>
            <div className='input-field col s12'>
                <input
                    type='text'
                    id='search-field'
                    placeholder='Find images'
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                />
                <i
                    className="material-icons prefix large icon search-icon"
                    onClick={() => getImages(query)}
                >search</i>
            </div>
        </div>
    )
}

export default Search