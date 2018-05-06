import {
  CREATE_CATEGORIES_ATTEMPT,
  CREATE_CATEGORIES_SUCCESS,
  CREATE_CATEGORIES_FAIL,
  CREATE_CATEGORIES_SET_VALUE,
} from '../ActionTypes/categories';

export const setValue = (name, value) => ({
  type: CREATE_CATEGORIES_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const attempt = () => ({
  type: CREATE_CATEGORIES_ATTEMPT,
});

const success = json => ({
  type: CREATE_CATEGORIES_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const fail = () => ({
  type: CREATE_CATEGORIES_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(attempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREAT_CATEGORIES_LINK}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(json => dispatch(success(json)))
    .catch(() => dispatch(fail()));
};
