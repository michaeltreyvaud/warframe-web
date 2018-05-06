import {
  CREATE_APPLICATION_ATTEMPT,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAIL,
  CREATE_APPLICATION_SET_VALUE,
} from '../ActionTypes/applications';

export const setValue = (name, value) => ({
  type: CREATE_APPLICATION_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const attempt = () => ({
  type: CREATE_APPLICATION_ATTEMPT,
});

const success = json => ({
  type: CREATE_APPLICATION_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const fail = () => ({
  type: CREATE_APPLICATION_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(attempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREAT_APPLICATIONS_LINK}`;
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
