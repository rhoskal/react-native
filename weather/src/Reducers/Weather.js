import {
  TEMP_CHANGED,
  WEATHER_CHANGED,
} from '../Actions/Types';

const INITIAL_STATE = {
  temp: 0,
  weather: 'Default',
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TEMP_CHANGED:
      return { ...state, temp: action.payload };
    case WEATHER_CHANGED:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
};
