import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,

  GET_JOBS_ATTEMPT,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
} from '../ActionTypes/jobs';

export const jobsInitialState = {
  index: {
    attempt: false,
    error: false,
    errorMessage: '',
    jobs: [],
  },
  create: {
    attempt: false,
    error: false,
    errorMessage: '',
  },
};

const jobsReducer = (state = jobsInitialState, action) => {
  switch (action.type) {
    case CREATE_JOB_ATTEMPT: {
      return {
        ...state,
        create: {
          ...state.create,
          attempt: true,
          error: false,
          errorMessage: '',
        },
      };
    }
    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        create: {
          ...state.create,
          attempt: false,
          error: false,
          errorMessage: '',
        },
      };
    }
    case CREATE_JOB_FAIL: {
      return {
        ...state,
        create: {
          ...state.create,
          attempt: false,
          error: true,
          errorMessage: 'An error occured, please try again',
        },
      };
    }
    case CREATE_JOB_SET_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        create: {
          ...state.create,
          [name]: value,
        },
      };
    }
    case GET_JOBS_ATTEMPT: {
      return {
        ...state,
        index: {
          ...state.index,
          attempt: true,
          error: false,
          errorMessage: '',
        },
      };
    }
    case GET_JOBS_SUCCESS: {
      const { jobs } = action.payload;
      return {
        ...state,
        index: {
          ...state.index,
          jobs,
          attempt: false,
          error: false,
          errorMessage: '',
        },
      };
    }
    case GET_JOBS_FAIL: {
      return {
        ...state,
        index: {
          ...state.index,
          attempt: false,
          error: true,
          errorMessage: 'An error occured, please try again',
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default jobsReducer;
