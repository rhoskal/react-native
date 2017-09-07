import { combineReducers } from 'redux';

import weather from './weather';

export default combineReducers({
  data: weather,
});
