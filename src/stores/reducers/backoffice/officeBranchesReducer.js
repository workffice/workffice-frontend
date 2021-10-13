import {
    FETCH_COLLABORATOR_OFFICE_BRANCHES,
    CREATE_OFFICE_BRANCH,
    FETCH_OFFICEBRANCHES_LIST
} from "../../actions/backoffice/officebranchActions";
import {includes} from 'lodash'

const initialState = [];

export const officeBranchesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_OFFICE_BRANCH:
            return state
        case FETCH_OFFICEBRANCHES_LIST:
            return [...payload]
        case FETCH_COLLABORATOR_OFFICE_BRANCHES: {
            const officeBranchIds = payload.map(officeBranch => officeBranch.id)
            return [
                ...state.filter(officeBranch => !includes(officeBranchIds, officeBranch.id)),
                ...payload
            ]
        }
        default:
            return state
    }
}

