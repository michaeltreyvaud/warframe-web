import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,

  GET_JOBS_ATTEMPT,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAIL,
} from '../ActionTypes/jobs';

export const setValue = (name, value) => ({
  type: CREATE_JOB_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const createAttempt = () => ({
  type: CREATE_JOB_ATTEMPT,
});

const createSuccess = json => ({
  type: CREATE_JOB_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const createFail = () => ({
  type: CREATE_JOB_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(createAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREATE_JOBS_LINK}`;
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
  type: GET_JOBS_ATTEMPT,
});

const getSuccess = jobs => ({
  type: GET_JOBS_SUCCESS,
  payload: {
    jobs,
  },
});

const getFail = () => ({
  type: GET_JOBS_FAIL,
});

export const getJobs = () => (dispatch) => {
  dispatch(getAttempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_GET_JOBS_LINK}`;
  return fetch(url)
    .then(res => res.json())
    .then(json => dispatch(getSuccess(json)))
    .catch(() => dispatch(getFail()));
};
