import { bookOfficeApi } from '../../../api/backoffice/booking'
import { setErrorAction, setSuccessAction } from '../notifications/writeNotificationActions'

export const BOOK_OFFICE = 'BOOK_OFFICE'


export const bookOfficeAction = booking => ({
    type: BOOK_OFFICE,
    payload: booking,
})

export const bookOffice = (officeId, bookingBody) => async dispatch => {
    try {
        dispatch(bookOfficeAction(await bookOfficeApi(officeId, bookingBody)))
        dispatch(setSuccessAction())
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}
