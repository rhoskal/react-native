import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE } from './types';

function _loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

function _loginRequestSuccess(accessToken) {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: accessToken,
  };
}

function _loginRequestFailure() {
  return {
    type: LOGIN_REQUEST_FAILURE,
  };
}

export function login(provider) {
  return dispatch => {
    dispatch(_loginRequest());
  };
}
