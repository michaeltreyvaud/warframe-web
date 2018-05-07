import {
  CREATE_CATEGORIES_ATTEMPT,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAIL,
  CREATE_CATEGORIES_SET_VALUE,

  GET_CATEGORIES_ATTEMPT,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from '../ActionTypes/categories';

export const setValue = (name, value) => ({
  type: CREATE_CATEGORIES_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const createAttempt = () => ({
  type: CREATE_CATEGORIES_ATTEMPT,
});

const createSuccess = json => ({
  type: CREATE_CATEGORIES_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const createFail = () => ({
  type: CREATE_CATEGORIES_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(createAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREATE_CATEGORIES_LINK}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(json => dispatch(createSuccess(json)))
    .catch(() => dispatch(createFail()));
};

const getAttempt = () => ({
  type: GET_CATEGORIES_ATTEMPT,
});

const getSuccess = categories => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: {
    categories,
  },
});

const getFail = () => ({
  type: GET_CATEGORIES_FAIL,
});

export const getCategories = () => (dispatch) => {
  dispatch(getAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_GET_CATEGORIES_LINK}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(getSuccess(json)))
    .catch(() => dispatch(getFail()));
};
