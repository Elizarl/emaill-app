import React from 'react';
import '../ActionButtons/ActionButtons.sass';

const ActionButtons = () => {
    return (
        <div id="actions-container">
                <div id="delete-spam-buttons">
                    <button id="delete">Delete</button>
                    <button id="spam">Spam</button>
                </div>
                <div id="unread-button-container">
                    <button id="mark-unread">Mark as unread</button>
                </div>
        </div>
      );
};

export default ActionButtons;