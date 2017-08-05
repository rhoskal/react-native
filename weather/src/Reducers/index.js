import { combineReducers } from 'redux';

import Weather from './Weather';

export default combineReducers({
  data: Weather,
});
