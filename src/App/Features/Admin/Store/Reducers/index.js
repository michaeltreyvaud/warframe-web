import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,
} from '../ActionTypes/jobs';
import {
  CREATE_APPLICATION_ATTEMPT,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAIL,
  CREATE_APPLICATION_SET_VALUE,
} from '../ActionTypes/applications';
import jobsReducer, { jobsInitialState } from './jobs';
import applicationsReducer, { applicationsInitialState } from './applications';

const initialState = {
  jobs: { ...jobsInitialState },
  applications: { ...applicationsInitialState },
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
    case CREATE_APPLICATION_ATTEMPT: {
      return {
        ...state,
        applications: applicationsReducer(state.signup, action),
      };
    }
    case CREATE_APPLICATION_SUCCESS: {
      return {
        ...state,
        applications: applicationsReducer(state.signup, action),
      };
    }
    case CREATE_APPLICATION_FAIL: {
      return {
        ...state,
        applications: applicationsReducer(state.signup, action),
      };
    }
    case CREATE_APPLICATION_SET_VALUE: {
      return {
        ...state,
        applications: applicationsReducer(state.signup, action),
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
