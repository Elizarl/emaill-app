import React from "react";

import dayjs from 'dayjs';

import '../CardItem/CardItem.sass';

const CardItem = ({ from, subject }) => {
  return (
    <div className="card-item">
      <div id="from-subject-container">
        <h4 id="from-title">{from}</h4>
        <h4 id="subject-title">{subject}</h4>
      </div>
      <div id="time-container">
        <h4 id="time-title">{dayjs().format('hh:mm A')}</h4>
      </div>
    </div>
  );
}

export default CardItem;