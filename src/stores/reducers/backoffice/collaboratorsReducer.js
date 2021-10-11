import { FETCH_COLLABORATORS } from "../../actions/backoffice/collaboratorsAction";
import { UPDATE_COLABORATOR } from "../../actions/backoffice/createCollaboratorAction";

const initialState = null

export const collaboratorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COLLABORATORS:
            return [...payload];
        case UPDATE_COLABORATOR:
            return state
        default:
            return state;
    }
}