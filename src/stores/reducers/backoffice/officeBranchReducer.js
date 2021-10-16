import { CREATE_OFFICE_BRANCH, FETCH_EDIT_OFFICEBRANCH, FETCH_OFFICEBRANCH_ID } from "../../actions/backoffice/officeBranchActions";

const initialState = null

export const officeBranchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_OFFICE_BRANCH:
            return state;
        case FETCH_OFFICEBRANCH_ID:
            return payload;
        case FETCH_EDIT_OFFICEBRANCH:
            return state;
        default:
            return state;
    }
}
