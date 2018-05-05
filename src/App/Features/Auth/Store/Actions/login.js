import {
  ATTEMPT_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SET_VALUE,
} from '../ActionTypes/login';

export const setValue = (name, value) => ({
  type: LOGIN_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const attempt = () => ({
  type: ATTEMPT_LOGIN,
});

const success = json => ({
  type: LOGIN_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const fail = () => ({
  type: LOGIN_FAIL,
});

export const login = body => (dispatch) => {
  dispatch(attempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_LOGIN_LINK}`;
  let formBody = [];
  Object.keys(body).map(key => formBody.push(`${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`));
  formBody = formBody.join('&');
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: formBody,
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(json => dispatch(success(json)))
    .catch(() => dispatch(fail()));
};
