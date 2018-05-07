import {
  CREATE_CATEGORIES_ATTEMPT,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAIL,
  CREATE_CATEGORIES_SET_VALUE,

  GET_CATEGORIES_ATTEMPT,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from '../ActionTypes/categories';

export const categoriesInitialState = {
  index: {
    attempt: false,
    error: false,
    errorMessage: '',
    categories: [],
  },
  create: {
    attempt: false,
    error: false,
    errorMessage: '',
  },
};

const categoriesReducer = (state = categoriesInitialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORIES_ATTEMPT: {
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
    case CREATE_CATEGORIES_SUCCESS: {
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
    case CREATE_CATEGORIES_FAIL: {
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
    case CREATE_CATEGORIES_SET_VALUE: {
      const { name, value } = action.payload;
      return {
        ...state,
        create: {
          ...state.create,
          [name]: value,
        },
      };
    }
    case GET_CATEGORIES_ATTEMPT: {
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
    case GET_CATEGORIES_SUCCESS: {
      const { categories } = action.payload;
      return {
        ...state,
        index: {
          ...state.index,
          categories,
          attempt: false,
          error: false,
          errorMessage: '',
        },
      };
    }
    case GET_CATEGORIES_FAIL: {
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

export default categoriesReducer;
