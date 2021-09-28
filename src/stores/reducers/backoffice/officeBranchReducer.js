import { FETCH_EDIT_OFFICEBRANCH, FETCH_OFFICEBRANCH_ID } from "../../actions/backoffice/officebranchActions";

const initialState = null;

export const officeBranchReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case FETCH_OFFICEBRANCH_ID:
            return currentState = payload;
        case FETCH_EDIT_OFFICEBRANCH:
            return currentState = payload;
        default:
            return currentState;
    }
}

