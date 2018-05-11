import React from 'react';
import './search-box.css';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className={'search-box'}>
            <input onChange={searchChange} type='search' placeholder='Search robots' />
        </div>
    );
}

export default SearchBox;