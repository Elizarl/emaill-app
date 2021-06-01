import React from 'react';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';

import '../Header/Header.sass';
import SearchBar from '../../components/SearchBar/SearchBar'
import MenuItem from '@material-ui/core/MenuItem';
import { filterByInbox } from "../../actions/filter";
import { filterBySpam } from "../../actions/filter";
import { filterByDeleted } from "../../actions/filter";


const Header = ({ unread, filterByInbox, filterBySpam, filterByDeleted}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                    <button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>+</button>
                    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
              <MenuItem className="menu-item" onClick={() => {
                filterByInbox()
              }}>Inbox</MenuItem>
              <MenuItem className="menu-item" onClick={() => {
                handleClose,
                  filterBySpam()
              }}>Spam</MenuItem>
              <MenuItem className="menu-item" onClick={() => {
                handleClose,
                  filterByDeleted()
              }}>Delete</MenuItem>
      </Menu>
                </div>
            </div>
            <SearchBar />
        </>   
     );
};

const mapStateToProps = (state) => ({
    unread: state.emails.filter(email => !email.isRead).length
});

const mapDispatchToProps = (dispatch) => ({
  filterByInbox: () => dispatch(filterByInbox()),
  filterBySpam: () => dispatch(filterBySpam()),
  filterByDeleted: () => dispatch(filterByDeleted()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header); 
