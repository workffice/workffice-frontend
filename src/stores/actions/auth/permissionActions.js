export const SET_FORBIDDEN_ACCESS = "SET_FORBIDDEN_ACCESS"
export const SET_SUCCESS_ACCESS = "SET_SUCCESS_ACCESS"


export const setForbiddenAccessAction = resource => ({
    type: SET_FORBIDDEN_ACCESS,
    payload: resource
})


export const setSuccessAccess = resource => ({
    type: SET_SUCCESS_ACCESS,
    payload: resource
})
