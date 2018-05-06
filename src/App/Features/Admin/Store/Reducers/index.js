import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,
} from '../ActionTypes/jobs';
import jobsReducer, { jobsInitialState } from './jobs';

const initialState = {
  jobs: { ...jobsInitialState },
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB_ATTEMPT: {
      return {
        ...state,
        jobs: jobsReducer(state.signup, action),
      };
    }
    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        jobs: jobsReducer(state.signup, action),
      };
    }
    case CREATE_JOB_FAIL: {
      return {
        ...state,
        jobs: jobsReducer(state.signup, action),
      };
    }
    case CREATE_JOB_SET_VALUE: {
      return {
        ...state,
        jobs: jobsReducer(state.signup, action),
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
