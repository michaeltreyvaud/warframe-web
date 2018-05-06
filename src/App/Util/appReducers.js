import { combineReducers } from 'redux';
import authReducer from '../Features/Auth/Store/Reducers/';
import adminReducer from '../Features/Admin/Store/Reducers/';

const appReducers = combineReducers({
  auth: authReducer,
  admin: adminReducer,
});

export default appReducers;
