import { EMAIL_CHANGED } from './Types';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});
