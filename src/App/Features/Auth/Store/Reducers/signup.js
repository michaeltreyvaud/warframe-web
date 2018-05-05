import {
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_VALUE,
} from '../ActionTypes/signup';

export const signupInitialState = {
};

const signupReducer = (state = signupInitialState, action) => {
  switch (action.type) {
    case ATTEMPT_SIGNUP: {
      return {
        ...state,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
      };
    }
    case SIGNUP_FAIL: {
      return {
        ...state,
      };
    }
    case SET_VALUE: {
      console.log('yoyoyo');
      const { name, value } = action.payload;
      console.log(name, value);
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
