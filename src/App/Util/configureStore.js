import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import our apps reducers.
import appReducers from './appReducers';

const configureStore = () => createStore(
  appReducers,
  //  eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

//  Returns a configured redux store
export default configureStore;
