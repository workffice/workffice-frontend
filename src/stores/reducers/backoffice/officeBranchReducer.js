import { FETCH_EDIT_OFFICEBRANCH, FETCH_OFFICEBRANCH_ID } from "../../actions/backoffice/officebranchActions";

const initialState = {
    location: {}, 
}

export const officeBranchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_OFFICEBRANCH_ID:
            return {...payload};
        case FETCH_EDIT_OFFICEBRANCH:
            return state;
        default:
            return state;
    }
}

