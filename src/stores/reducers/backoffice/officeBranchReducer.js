import {
    CLEAN_OFFICE_BRANCH,
    CREATE_OFFICE_BRANCH,
    FETCH_EDIT_OFFICEBRANCH,
    FETCH_OFFICEBRANCH_ID,
} from "../../actions/backoffice/officeBranch/officeBranchAdminActions";
import { FETCH_OFFICE_BRANCH_DETAIL } from "../../actions/backoffice/officeBranch/officeBranchDetailActions";


export const officeBranchReducer = (state = null, { type, payload }) => {
    switch (type) {
        case CREATE_OFFICE_BRANCH:
            return state;
        case FETCH_OFFICEBRANCH_ID:
            return payload;
        case FETCH_EDIT_OFFICEBRANCH:
            return state;
        case CLEAN_OFFICE_BRANCH:
            return null;
        default:
            return state;
    }
}

export const officeBranchSearchReducer = (state = null, { type, payload }) => {
    switch (type) {
        case FETCH_OFFICE_BRANCH_DETAIL:
            return payload;
        default: return state
    }
}
