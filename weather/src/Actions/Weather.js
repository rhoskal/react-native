import axios from 'axios';
import {
  TEMP_CHANGED,
  WEATHER_CHANGED,
} from './Types';

export const tempChanged = (text) => ({
  type: TEMP_CHANGED,
  payload: text,
});

export const weatherChanged = (text) => ({
  type: WEATHER_CHANGED,
  payload: text,
});

export const fetchWeatherData = (lat, lon) => {
  console.log(`fetchWeatherData(lat:${lat}, lon:${lon})`);
  const root = 'http://api.openweathermap.org/data/2.5/weather';
  const appid = 'appid=62328e4464216d93be8e8d5590566f18';
  const url = `${root}?${appid}&lat=${lat}&lon=${lon}&units=metric`;
  console.log(url);

  return (dispatch) => {
    //dispatch({ type: 'FETCH_REQUEST' }) //display default screen?
    axios.get(url)
    .then(response =>
        Promise.all([
          dispatch({ type: TEMP_CHANGED, payload: response.data.main.temp }),
          dispatch({ type: WEATHER_CHANGED, payload: response.data.weather[0].main })
        ]))
      .catch(error => console.log(`Error: ${error}`));
  };
};
