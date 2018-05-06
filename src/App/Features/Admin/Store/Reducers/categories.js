import {
  CREATE_CATEGORIES_ATTEMPT,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAIL,
  CREATE_CATEGORIES_SET_VALUE,
} from '../ActionTypes/categories';

export const categoriesInitialState = {
  attempt: false,
  error: false,
  errorMessage: '',
};

const categoriesReducer = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORIES_ATTEMPT: {
      return {
        ...state,
        attempt: true,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_CATEGORIES_SUCCESS: {
      return {
        ...state,
        attempt: false,
        error: false,
        errorMessage: '',
      };
    }
    case CREATE_CATEGORIES_FAIL: {
      return {
        ...state,
        attempt: false,
        error: true,
        errorMessage: 'An error occured, please try again',
      };
    }
    case CREATE_CATEGORIES_SET_VALUE: {
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

export default categoriesReducer;
