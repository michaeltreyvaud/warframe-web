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
import {
  CREATE_CATEGORIES_ATTEMPT,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAIL,
  CREATE_CATEGORIES_SET_VALUE,
} from '../ActionTypes/categories';
import jobsReducer, { jobsInitialState } from './jobs';
import applicationsReducer, { applicationsInitialState } from './applications';
import categoriesReducer, { categoriesInitialState } from './categories';

const initialState = {
  jobs: { ...jobsInitialState },
  applications: { ...applicationsInitialState },
  categories: { ...categoriesInitialState },
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB_ATTEMPT: {
      return {
        ...state,
        jobs: jobsReducer(state.jobs, action),
      };
    }
    case CREATE_JOB_SUCCESS: {
      return {
        ...state,
        jobs: jobsReducer(state.jobs, action),
      };
    }
    case CREATE_JOB_FAIL: {
      return {
        ...state,
        jobs: jobsReducer(state.jobs, action),
      };
    }
    case CREATE_JOB_SET_VALUE: {
      return {
        ...state,
        jobs: jobsReducer(state.jobs, action),
      };
    }
    case CREATE_APPLICATION_ATTEMPT: {
      return {
        ...state,
        applications: applicationsReducer(state.applications, action),
      };
    }
    case CREATE_APPLICATION_SUCCESS: {
      return {
        ...state,
        applications: applicationsReducer(state.applications, action),
      };
    }
    case CREATE_APPLICATION_FAIL: {
      return {
        ...state,
        applications: applicationsReducer(state.applications, action),
      };
    }
    case CREATE_APPLICATION_SET_VALUE: {
      return {
        ...state,
        applications: applicationsReducer(state.applications, action),
      };
    }
    case CREATE_CATEGORIES_ATTEMPT: {
      return {
        ...state,
        categories: categoriesReducer(state.categories, action),
      };
    }
    case CREATE_CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: categoriesReducer(state.categories, action),
      };
    }
    case CREATE_CATEGORIES_FAIL: {
      return {
        ...state,
        categories: categoriesReducer(state.categories, action),
      };
    }
    case CREATE_CATEGORIES_SET_VALUE: {
      return {
        ...state,
        categories: categoriesReducer(state.categories, action),
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
