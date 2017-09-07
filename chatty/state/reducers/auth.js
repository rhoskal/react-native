import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  accessToken: '',
  authenticating: false,
  error: false,
  profile: {
    name: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        authenticating: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        authenticating: false,
        accessToken: action.payload,
      };
    case LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        authenticating: false,
        error: true,
      };
    default:
      return state;
  }
};
