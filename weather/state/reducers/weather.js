import { CITY_CHANGED, TEMP_CHANGED, WEATHER_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  city: 'Unknown',
  temp: 0,
  weather: 'Default',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITY_CHANGED:
      return { ...state, city: action.payload };
    case TEMP_CHANGED:
      return { ...state, temp: action.payload };
    case WEATHER_CHANGED:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
