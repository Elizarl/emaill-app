import React from 'react';
import { connect } from "react-redux";
import '../ActionButtons/ActionButtons.sass';
import { markAsUnread } from "../../actions/emails";

const ActionButtons = ({id , markAsUnread}) => {
    return (
        <div id="actions-container">
                <div id="delete-spam-buttons">
                    <button id="delete">Delete</button>
                    <button id="spam">Spam</button>
                </div>
                <div onClick={() => markAsUnread(id)} id="unread-button-container">
                    <button id="mark-unread">Mark as unread</button>
                </div>
        </div>
      );
};

const mapStateToProps = (state) => ({
    id: state.selected
});

const mapDispatchToProps = (dispatch) => ({
  markAsUnread: (id) => dispatch(markAsUnread(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);