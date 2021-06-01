import React from 'react';
import { connect } from "react-redux";
import '../ActionButtons/ActionButtons.sass';
import { markAsUnread } from "../../actions/emails";
import { deleteEmail } from "../../actions/emails";
import { spamEmail } from "../../actions/emails";
import { clearSelectedEmail } from "../../actions/selected";

const ActionButtons = ({id , markAsUnread, deleteEmail, spamEmail, clearSelectedEmail}) => {
    return (
        <div id="actions-container">
                <div id="delete-spam-buttons">
                <button onClick={() => {
                    deleteEmail(id),
                    clearSelectedEmail(id)    
                }} id="delete-button">Delete</button>
                <button onClick={() => {
                    spamEmail(id),
                    clearSelectedEmail(id) 
                }} id="spam-button">Spam</button>
                </div>
                <div id="unread-button-container">
                <button onClick={() => {
                    markAsUnread(id),
                    clearSelectedEmail(id) 
                }} id="mark-unread-button">Mark as unread</button>
                </div>
        </div>
      );
};

const mapStateToProps = (state) => ({
    id: state.selected
});

const mapDispatchToProps = (dispatch) => ({
    markAsUnread: (id) => dispatch(markAsUnread(id)),
    deleteEmail: (id) => dispatch(deleteEmail(id)),
    spamEmail: (id) => dispatch(spamEmail(id)),
    clearSelectedEmail: (id) => dispatch(clearSelectedEmail(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);