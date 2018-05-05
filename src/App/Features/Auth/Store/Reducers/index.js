import {
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_VALUE,
} from '../ActionTypes/signup';
import signupReducer, { signupInitialState } from './signup';

const initialState = {
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
    default:
      return state;
  }
};

export default authReducer;
