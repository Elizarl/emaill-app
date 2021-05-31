import React from 'react';
import { connect } from 'react-redux';

import '../Header/Header.sass';
import SearchBar from '../../components/SearchBar/SearchBar'


const Header = ({unread}) => {
    return (
        <>
            <div className="header">
                <div id="title-container">
                    <h2 className="title">Inbox</h2>
                <div id="counting-box">
                    <h3 id="counting-title">{unread}</h3>
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

const mapStateToProps = (state) => ({
    unread: state.emails.filter(email => !email.isRead).length
});

export default connect(mapStateToProps)(Header); 
