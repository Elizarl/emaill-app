import React from "react";
import { connect } from "react-redux";

import "../EmailDescription/EmailDescription.sass";

const EmailDescription = ({ email }) => {
  return (
    <div id="description-container">
      {email !== undefined ? (
        <>
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
          <div id="emails-description">{email.body}</div>
          <div id="footage">
            <div id="img">clipsito</div>
            <button>Replay</button>
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
