import {
  CREATE_APPLICATION_ATTEMPT,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAIL,
  CREATE_APPLICATION_SET_VALUE,
} from '../ActionTypes/applications';

export const applicationsInitialState = {
  attempt: false,
  error: false,
  errorMessage: '',
};

const applicationsReducer = (state = applicationsInitialState, action) => {
  switch (action.type) {
    case CREATE_APPLICATION_ATTEMPT: {
      return {
        ...state,
        attempt: true,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_APPLICATION_SUCCESS: {
      return {
        ...state,
        attempt: false,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_APPLICATION_FAIL: {
      return {
        ...state,
        attempt: false,
        error: true,
        errorMessage: 'An error occured, please try again',
      };
    }
    case CREATE_APPLICATION_SET_VALUE: {
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

export default applicationsReducer;
