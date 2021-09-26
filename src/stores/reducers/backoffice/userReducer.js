import { FETCH_ME } from "../../actions/backoffice/userActions";


const initialState = null;

export const userMeReducer = (state = initialState, { type, payload }) => {
    let currentState = state;
    switch (type) {
        case FETCH_ME:
            return currentState = payload
        default:
            return currentState;
    }
}