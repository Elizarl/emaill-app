import React from 'react';
import '../EmailDescription/EmailDescription.sass';

const EmailDescription = () => {
    return (
        <div id="description-container">
            <div id="description-title">
                <h2>Title</h2>
            </div>
            <div id="tags">
                <h3>Tags</h3>
                <div id="tags-buttons">
                    <div id="tag1">Inbox</div>
                    <div id="tag2">Business</div>
                 </div>   
            </div>
            <div id="emails-description">sads</div>
            <div id="footage">
                <div id="img">clipsito</div>
                <button>Replay</button>
            </div>
        </div>
      );
};

export default EmailDescription;