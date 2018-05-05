import {
  ATTEMPT_SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SET_VALUE,
} from '../ActionTypes/signup';

export const setValue = (name, value) => ({
  type: SET_VALUE,
  payload: {
    name,
    value,
  },
});

const attempt = () => ({
  type: ATTEMPT_SIGNUP,
});

const success = () => ({
  type: SIGNUP_SUCCESS,
});

const fail = () => ({
  type: SIGNUP_FAIL,
});

export const signup = body => (dispatch) => {
  dispatch(attempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_SIGNUP_LINK}`;
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(url, options)
    .then(res => res.json())
    .then((json) => {
      console.log('json', json);
      return dispatch(success(json));
    })
    .catch(() => dispatch(fail()));
};
