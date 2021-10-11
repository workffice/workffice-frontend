import { FETCH_COLLABORATOR_ROLES, FETCH_ROLES } from "../../actions/backoffice/rolesAction";

const initialState = null;

export const rolesReducer = (state = initialState, { type, payload }) => {

    let currentState = state;
    switch (type) {
        case FETCH_ROLES:
            return currentState = payload;
        default:
            return currentState;
    }
}

const collaboratorRolesInitialState = {}

export const collaboratorRolesReducer = (state = collaboratorRolesInitialState, { type, payload }) => {
    switch (type) {
        case FETCH_COLLABORATOR_ROLES: {
            return { ...state, ...payload };
        }
        default:
            return state;
    }
}
