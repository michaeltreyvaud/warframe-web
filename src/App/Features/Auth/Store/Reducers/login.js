import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SET_VALUE,
} from '../ActionTypes/login';

export const loginInitialState = {
  attempt: false,
  error: false,
  errorMessage: '',
};

const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case ATTEMPT_LOGIN: {
      return {
        ...state,
        attempt: true,
        error: false,
        errorMessage: '',
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        attempt: false,
        error: false,
        errorMessage: '',
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        attempt: false,
        error: true,
        errorMessage: 'An error occured, please try again',
      };
    }
    case LOGIN_SET_VALUE: {
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

export default loginReducer;
