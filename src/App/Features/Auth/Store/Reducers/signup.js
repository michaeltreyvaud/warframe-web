import {
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_VALUE,
} from '../ActionTypes/signup';

export const signupInitialState = {
  attempt: false,
  error: false,
  errorMessage: '',
};

const signupReducer = (state = signupInitialState, action) => {
  switch (action.type) {
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
        attempt: true,
        error: false,
        errorMessage: '',
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        attempt: false,
        error: false,
        errorMessage: '',
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
        attempt: false,
        error: true,
        errorMessage: 'An error occured, please try again',
      };
    }
    case SET_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }
    default: {
      return state;
    }
  }
};

export default signupReducer;
