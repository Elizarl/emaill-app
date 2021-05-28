import React from 'react';

import '../Header/Header.sass';
import SearchBar from '../../components/SearchBar/SearchBar'


const Header = () => {
    return (
        <>
            <div className="header">
                <div id="title-container">
                    <h2 className="title">Inbox</h2>
                <div id="counting-box">
                    <h3 id="counting-title">3</h3>
                </div>
                </div>
                <div id="filter-container">
                    <div id="filter">
                        <h4 id="filter-title">Filter by</h4>
                    </div>
                    <button>+</button>
                </div>
            </div>
            <SearchBar />
        </>   
     );
};

export default Header; 