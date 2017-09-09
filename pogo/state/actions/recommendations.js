import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  UPDATE_LOCATION,
} from './types';

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
  payload: true,
});

export const fetchRequestSuccess = text => ({
  type: FETCH_REQUEST_SUCCESS,
  payload: text,
});

export const fetchRequestFailure = text => ({
  type: FETCH_REQUEST_FAILURE,
  payload: text,
});

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  payload: location,
});
