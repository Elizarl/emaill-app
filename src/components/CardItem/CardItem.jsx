import React from "react";
import { connect } from "react-redux";

import dayjs from "dayjs";

import "../CardItem/CardItem.sass";
import { setSelectedEmail } from "../../actions/selected";
import { markAsRead } from "../../actions/emails";

export const CardItem = ({ from, subject, id, setSelectedEmail, markAsRead , email }) => {
  return (
    <div
      onClick={() => {
        setSelectedEmail(id);
        markAsRead(id);
      }}
       className={ id == email ? "card-item-active" : "card-item" }
      >
      <div id="from-subject-container">
        <h4 id="from-title">{from}</h4>
        <h4 id="subject-title">{subject}</h4>
      </div>
      <div id="time-container">
        <h4 id="time-title">{dayjs().format("hh:mm A")}</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
   email: state.selected
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedEmail: (id) => dispatch(setSelectedEmail(id)),
  markAsRead: (id) => dispatch(markAsRead(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
