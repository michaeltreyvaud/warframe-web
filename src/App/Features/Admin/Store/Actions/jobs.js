import {
  CREATE_JOB_ATTEMPT,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,
  CREATE_JOB_SET_VALUE,
} from '../ActionTypes/jobs';

export const setValue = (name, value) => ({
  type: CREATE_JOB_SET_VALUE,
  payload: {
    name,
    value,
  },
});

const attempt = () => ({
  type: CREATE_JOB_ATTEMPT,
});

const success = json => ({
  type: CREATE_JOB_SUCCESS,
  payload: {
    token: json.access_token,
  },
});

const fail = () => ({
  type: CREATE_JOB_FAIL,
});

export const create = body => (dispatch) => {
  dispatch(attempt());
  const url = `${process.env.REACT_APP_ROOT_URL}${process.env.REACT_APP_CREAT_JOBS_LINK}`;
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
