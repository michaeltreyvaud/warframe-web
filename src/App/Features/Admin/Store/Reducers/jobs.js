import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,
} from '../ActionTypes/jobs';

export const jobsInitialState = {
  attempt: false,
  error: false,
  errorMessage: '',
};

const jobsReducer = (state = jobsInitialState, action) => {
  switch (action.type) {
    case CREATE_JOB_ATTEMPT: {
      return {
        ...state,
        attempt: true,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        attempt: false,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_JOB_FAIL: {
      return {
        ...state,
        attempt: false,
        error: true,
        errorMessage: 'An error occured, please try again',
      };
    }
    case CREATE_JOB_SET_VALUE: {
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

export default jobsReducer;
