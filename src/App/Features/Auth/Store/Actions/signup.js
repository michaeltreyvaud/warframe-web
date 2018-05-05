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

export const attempt = () => ({
  type: ATTEMPT_SIGNUP,
});

export const success = () => ({
  type: SIGNUP_SUCCESS,
});

export const fail = () => ({
  type: SIGNUP_FAIL,
});
