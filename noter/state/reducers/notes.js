import { ADD_NOTE, DELETE_NOTE } from '../actions/types';

const INITIAL_STATE = {
  notes: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: [...state.notes.slice(0, action.payload), ...state.notes.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};
