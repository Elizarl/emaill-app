import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import emailsReducer from '../reducers/emails';
import selectedEmailsReducer from '../reducers/selectedEmail';
import filtersReducer from '../reducers/filter';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const  configureStore = () => {
  const store = createStore(
    combineReducers({
      emails: emailsReducer,
      selected: selectedEmailsReducer,
      filter: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
export default configureStore;