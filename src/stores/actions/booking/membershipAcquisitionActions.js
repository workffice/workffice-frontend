import { acquireMembershipApi } from "../../../api/booking/membershipAcquisition"
import { getMembershipAcquisitions } from "../../../infra/api/booking/membershipAcquisition"
import { setErrorAction, setSuccessAction } from "../notifications/writeNotificationActions"

export const ACQUIRE_MEMBERSHIP = 'ACQUIRE_MEMBERSHIP'

export const acquireMembershipAction = membershipAcquisition => ({
    type: ACQUIRE_MEMBERSHIP,
    payload: membershipAcquisition,
})

export const acquireMembership = membershipId => async dispatch => {
    try {
        dispatch(acquireMembershipAction(await acquireMembershipApi(membershipId)))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}

export const FETCH_MEMBERSHIP_ACQUISITIONS = 'FETCH_MEMBERSHIP_ACQUISITIONS'

export const fetchMembershipAcquisitionsAction = membershipAcquisitions => ({
    type: ACQUIRE_MEMBERSHIP,
    payload: membershipAcquisitions,
})

export const fetchMembershipAcquisition = () => async dispatch => {
    try {
        dispatch(fetchMembershipAcquisitionsAction(await getMembershipAcquisitions()))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}
