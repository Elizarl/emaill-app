import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { emails } from "./mockData/mail-data";

import App from "./components/App/App";
import configureStore from './store/configureStore';
import { addEmail } from './actions/emails';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

window.setInterval(() => {
  store.dispatch(addEmail(emails[0]));
  store.dispatch(addEmail(emails[1]));
}, 1000);
