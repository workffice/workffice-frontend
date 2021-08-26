import { FETCH_REGISTER } from '../../actions/auth/registerActions';

const initialState = null;

export const registerReducer = (state = initialState, { type, payload }) => {
  let currentState = state;
  if (type === FETCH_REGISTER) {
    currentState = payload;
  }
  return currentState;
};
