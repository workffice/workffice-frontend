import { SET_FORBIDDEN_ACCESS, SET_SUCCESS_ACCESS } from "../../actions/auth/permissionActions"

export const permissionReducer = (state = { isForbidden: false }, { type }) => {
    switch (type) {
        case SET_SUCCESS_ACCESS: return { isForbidden: false }
        case SET_FORBIDDEN_ACCESS: return { isForbidden: true }
        default: return state
    }
}