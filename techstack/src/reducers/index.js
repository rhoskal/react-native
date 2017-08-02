import { combineReducers } from 'redux';

import Library from './Library';
import Selection from './Selection';

export default combineReducers({
  libraries: Library,
  selectedLibraryId: Selection
});
