import React from "react";
import { connect } from "react-redux";

import ActionButtons from '../ActionButtons/ActionButtons';
import "../EmailDescription/EmailDescription.sass";

const EmailDescription = ({ email }) => {
  return (
    <div id="description-container">
      {email !== undefined  ? (
        <>
          <ActionButtons />
          <h3 id="email-from-title">{email.from}</h3>
        <div id="tags-container">
          <div id="tags">
              <div id="tag-title">Tags</div>
              <div id="tag1">{email.tag}</div>
              <div id="tag2">{email.tag}</div>
          </div>
        </div>
          <div id="emails-description"><p>{email.body}</p></div>
          <div id="footage">
            <div id="img-container">
                <img className="img2" src="https://img.icons8.com/ios/452/attach.png"  sizes="(min-width: 576px) 33.3vw, 100vw" />
            </div>
            <button id="reply-button">Reply</button>
          </div>
        </>
      ) : (
        "no hay seleccionado"
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  email: state.emails.find((email) => email.id === state.selected),
});

export default connect(mapStateToProps)(EmailDescription);
