import { CLEAN_OFFICE, CREATE_OFFICE } from "../../actions/backoffice/officesActions";

const initialState = null;

export const officeReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case CREATE_OFFICE:
            return currentState = payload;
        case CLEAN_OFFICE:
            return currentState = payload || null;
        default:
            return currentState;
    }
}

