import axios from 'axios';
import { stringify } from 'query-string';

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

export const fetchVenues = ({ latitude, longitude }, lookingFor) => {
  const CLIENT_ID = '4VMVDF0DJLP4DKSFNW210VFMEL1OJ3P5HAAQJGOC4YFYIOJ2';
  const CLIENT_SECRET = 'ZXA5FEE4GJY4S525PBWUDM22R3FTNTOHKQ0FMJNV0GGBTYBU';
  const FOURSQUARE_ENDPOINT = 'https://api.foursquare.com/v2/venues/explore';
  const API_DEBOUNCE_TIME = 2000;

  const query = stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    v: 20170913,
    ll: `${latitude},${longitude}`,
    section: lookingFor,
    limit: 10,
    openNow: 1,
    venuePhotos: 1,
  });

  return dispatch => {
    axios
      .get(`${FOURSQUARE_ENDPOINT}?${query}`)
      // .then(response => console.log(response.data.response.groups[0].items))
      // .then(response => fetchRequestSuccess(response.data.response.groups[0].items))
      .then(response => dispatch({ type: FETCH_REQUEST_SUCCESS, payload: response.data.response.groups[0].items }))
      // .then(response => fetchRequestSuccess(response.data.response.groups[0].items))
      .catch(error => fetchRequestFailure(error));
  };
};

// function shouldFetchVenues(lookingFor) {
//   // return lookingFor != this.state.lookingFor || this.state.last4sqCall === null
//   //    || new Date() - this.state.last4sqCall > API_DEBOUNCE_TIME;
//   return true;
// }
