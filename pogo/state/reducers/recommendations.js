import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  UPDATE_LOCATION,
} from '../actions/types';

const INITIAL_STATE = {
  recommendations: [],
  isFetching: false,
  location: {},
};

// state = {
//   mapRegion: null,
//   gpsAccuracy: null,
//   recommendations: [],
//   lookingFor: null,
//   headerLocation: null,
//   last4sqrCall: null,
// };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isFetching: action.payload,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        temp: action.payload,
      };
    case FETCH_REQUEST_FAILURE:
      return {
        ...state,
        weather: action.payload,
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
