import { acquireMembershipApi } from "../../../api/booking/membershipAcquisition"
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
