import { EMAIL_CHANGED } from '../actions';

export default (state = { email: '' }, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
