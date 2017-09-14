import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  UPDATE_LOCATION,
} from '../actions/types';

const INITIAL_STATE = {
  venues: [],
  isFetching: false,
  location: {},
  lookingFor: 'food',
  last4sqCall: null,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        venues: [...state.venues, action.payload],
        isFetching: false,
      };
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};
