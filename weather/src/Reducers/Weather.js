import {
  TEMP_CHANGED,
  WEATHER_CHANGED,
  UNITS_CHANGED,
} from '../Actions/Types';

const INITIAL_STATE = {
  temp: 0,
  weather: 'Default',
  metricUnits: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEMP_CHANGED:
      return { ...state, temp: action.payload };
    case WEATHER_CHANGED:
      return { ...state, weather: action.payload };
    case UNITS_CHANGED:
      return { ...state, metricUnits: action.payload };
    default:
      return state;
  }
};

// const _switchToFahrenheit () => {
//   return (9/5) * temp + 32;
// };
