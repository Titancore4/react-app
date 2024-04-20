import React, { useState } from 'react';
import "./Search.styles.scss"

const Search = ({ handleSearch }) => {
    const [text, setText] = useState('');

    const textHandler = (event) => {
        const searchText = event.target.value;
        setText(searchText);
        handleSearch(searchText);
    };

    return (
        <div className='search'>
            <input className='text' type="text" value={text} onChange={textHandler} placeholder="Search..." />
        </div>
    );
};

export default Search;
