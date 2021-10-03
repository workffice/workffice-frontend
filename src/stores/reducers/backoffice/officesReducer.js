import { FETCH_OFFICES } from "../../actions/backoffice/officesActions";

const initialState = null;

export const officesReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case FETCH_OFFICES:
            return currentState = payload;
        default:
            return currentState;
    }
}

