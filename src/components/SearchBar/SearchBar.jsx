import React from 'react';
import { connect } from 'react-redux';
import '../SearchBar/SearchBar.sass';
import { searchBy } from '../../actions/search'

const SearchBar = ({ searchBy, onChange }) => {
  
  onChange = (e) => {
    searchBy(e.target.value)
  }
  return (
    <div id="search-container">
      <input id="input-search-bar" type="text" placeholder="Search" onChange={(e) => {
        searchBy(e.target.value)
      }
      } />
      <div id="icon-search-bar">
        <img className="img" src="https://thumbs.dreamstime.com/b/icono-de-la-b%C3%BAsqueda-lupa-del-vector-o-muestra-131036619.jpg"  sizes="(min-width: 576px) 33.3vw, 100vw" />
        </div>
      </div>
  );
};
    const mapStateToProps = (state) => ({
    searchemails: state.emails.filter((email) => {
    return state.searchemails.email
      }),
});
      
const mapDispatchToProps = (dispatch) => ({
  searchBy: (text) => dispatch(searchBy(text)),
});


export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);