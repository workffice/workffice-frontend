import { CREATE_OFFICE } from "../../../actions/backoffice/office/officeActions";

const initialState = null;

export const officeReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case CREATE_OFFICE:
            return currentState = payload;
        default:
            return currentState;
    }
}
