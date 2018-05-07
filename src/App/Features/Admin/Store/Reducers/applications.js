import {
  CREATE_APPLICATION_ATTEMPT,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAIL,
  CREATE_APPLICATION_SET_VALUE,

  GET_APPLICATION_ATTEMPT,
  GET_APPLICATION_SUCCESS,
  GET_APPLICATION_FAIL,
} from '../ActionTypes/applications';

export const applicationsInitialState = {
  index: {
    attempt: false,
    error: false,
    errorMessage: '',
    apps: [],
  },
  create: {
    attempt: false,
    error: false,
    errorMessage: '',
  },
};

const applicationsReducer = (state = applicationsInitialState, action) => {
  switch (action.type) {
    case CREATE_APPLICATION_ATTEMPT: {
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
    case CREATE_APPLICATION_SUCCESS: {
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
    case CREATE_APPLICATION_FAIL: {
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
    case CREATE_APPLICATION_SET_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        create: {
          ...state.create,
          [name]: value,
        },
      };
    }
    case GET_APPLICATION_ATTEMPT: {
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
    case GET_APPLICATION_SUCCESS: {
      const { apps } = action.payload;
      return {
        ...state,
        index: {
          ...state.index,
          apps,
          attempt: false,
          error: false,
          errorMessage: '',
        },
      };
    }
    case GET_APPLICATION_FAIL: {
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

export default applicationsReducer;
