import { FETCH_LOGIN } from "../../actions/auth/loginActions";


const initialState = [];

export const loginReducer = (state = initialState, { type, payload }) => {
  let currentState = state;
  if (type === FETCH_LOGIN) {
    return currentState = payload;
  } else {
    return currentState;
  }
};
