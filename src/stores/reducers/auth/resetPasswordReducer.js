import { FETCH_RESET } from "../../actions/auth/recoveryPasswordActions";

const initialState = null;

export const resetReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    if (type === FETCH_RESET) currentState = payload;
    return currentState
}