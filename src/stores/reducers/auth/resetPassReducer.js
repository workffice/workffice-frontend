import { FETCH_RESET } from "../../actions/auth/resetPasswordAction";

const intialState = null;

export const resetPassword = (state = intialState, { type, payload }) => {
    let currentState = state;
    if (type === FETCH_RESET) currentState = payload;
    return currentState
}