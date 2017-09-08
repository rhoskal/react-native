import { ADD_NOTE, DELETE_NOTE } from './types';

export const addNote = text => ({
  type: ADD_NOTE,
  payload: text,
});

export const deleteNote = index => ({
  type: DELETE_NOTE,
  payload: index,
  // [...state.notes.slice(0, action.payload), ...state.notes.slice(action.payload + 1)],
});
