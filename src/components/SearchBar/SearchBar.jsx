import React from 'react';
import '../SearchBar/SearchBar.sass';

const SearchBar = ({ onChange }) => {
  return (
    <div id="search-container">
        <input id="input-search-bar" type="text" placeholder="Search" onChange={onChange} />
        <div id="icon-search-bar">lupita</div>
      </div>
  );
};

export default SearchBar;