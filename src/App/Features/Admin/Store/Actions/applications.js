import {
  CREATE_APPLICATION_ATTEMPT,
  CREATE_APPLICATION_SUCCESS,
  CREATE_APPLICATION_FAIL,
  CREATE_APPLICATION_SET_VALUE,

  GET_APPLICATION_ATTEMPT,
  GET_APPLICATION_SUCCESS,
  GET_APPLICATION_FAIL,
} from '../ActionTypes/applications';

export const setValue = (name, value) => ({
  type: CREATE_APPLICATION_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const createAttempt = () => ({
  type: CREATE_APPLICATION_ATTEMPT,
});

const createSuccess = json => ({
  type: CREATE_APPLICATION_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const createFail = () => ({
  type: CREATE_APPLICATION_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(createAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREATE_APPLICATIONS_LINK}`;
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
  type: GET_APPLICATION_ATTEMPT,
});

const getSuccess = apps => ({
  type: GET_APPLICATION_SUCCESS,
  payload: {
    apps,
  },
});

const getFail = () => ({
  type: GET_APPLICATION_FAIL,
});

export const getApps = () => (dispatch) => {
  dispatch(getAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_GET_APPLICATIONS_LINK}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(getSuccess(json)))
    .catch(() => dispatch(getFail()));
};
