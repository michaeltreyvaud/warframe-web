import {
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_VALUE,
} from '../ActionTypes/signup';
import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SET_VALUE,
} from '../ActionTypes/login';
import signupReducer, { signupInitialState } from './signup';
import loginReducer, { loginInitialState } from './login';

const initialState = {
  login: { ...loginInitialState },
  signup: { ...signupInitialState },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case SET_VALUE: {
      return {
        ...state,
        signup: signupReducer(state.signup, action),
      };
    }
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    case LOGIN_SET_VALUE: {
      return {
        ...state,
        login: loginReducer(state.login, action),
      };
    }
    default:
      return state;
  }
};

export default authReducer;
