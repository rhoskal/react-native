import {
  TEMP_CHANGED,
  WEATHER_CHANGED,
  UNITS_CHANGED,
} from './Types';

export const tempChanged = (text) => ({
  type: TEMP_CHANGED,
  payload: text,
});

export const weatherChanged = (text) => ({
  type: WEATHER_CHANGED,
  payload: text,
});

export const switchToFahrenheit = () => ({
  type: UNITS_CHANGED,
});
