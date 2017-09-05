import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, data: [], isFetching: true };
    case FETCHING_DATA_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case FETCHING_DATA_FAILURE:
      return { ...state, isFetching: false, error: true };
    default:
      return state;
  }
};
