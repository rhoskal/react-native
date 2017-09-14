import axios from 'axios';
import { stringify } from 'query-string';
import { fetchRequest, fetchRequestSuccess, fetchRequestFailure } from '../state/actions';

const CLIENT_ID = '4VMVDF0DJLP4DKSFNW210VFMEL1OJ3P5HAAQJGOC4YFYIOJ2';
const CLIENT_SECRET = 'ZXA5FEE4GJY4S525PBWUDM22R3FTNTOHKQ0FMJNV0GGBTYBU';
const FOURSQUARE_ENDPOINT = 'https://api.foursquare.com/v2/venues/explore';
const API_DEBOUNCE_TIME = 2000;

export function fetchVenues(region, lookingFor) {
  // if (!shouldFetchVenues(lookingFor)) return;
  // fetchRequest();
  const query = venuesQuery(region, lookingFor);

  axios
    .get(`${FOURSQUARE_ENDPOINT}?${query}`)
    .then(response => console.log(response))
    // .then(response => this.setState({ albums: response.data }))
    .catch(error => fetchRequestFailure(error));
}

function shouldFetchVenues(lookingFor) {
  // return lookingFor != this.state.lookingFor || this.state.last4sqCall === null
  //    || new Date() - this.state.last4sqCall > API_DEBOUNCE_TIME;
  return true;
}

function venuesQuery({ latitude, longitude }, lookingFor) {
  return stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    ll: `${latitude}, ${longitude}`,
    section: lookingFor || 'food',
    limit: 10,
    openNow: 1,
    venuePhotos: 1,
  });
}

export default fetchVenues;
