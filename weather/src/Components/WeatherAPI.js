import axios from 'axios';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=62328e4464216d93be8e8d5590566f18';

export const fetchWeather = (lat, lon) => {
  const url = `${rootUrl}&lat=${lat}&lon=${lon}&units=metric`;

  return (
    axios.get(url)
      .then(response => ({ temp: response.data.main.temp, weather: response.data.weather[0].main }))
      .catch(error => console.log(error))
    );
};
