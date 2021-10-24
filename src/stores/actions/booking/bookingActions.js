import { bookOfficeApi, createMercadoPagoPreferenceApi } from '../../../api/backoffice/booking'
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

export const CREATE_MERCADO_PAGO_PREFERENCE = 'CREATE_MERCADO_PAGO_PREFERENCE'


export const createMercadoPagoPreferenceAction = mpPreferenceId => ({
    type: CREATE_MERCADO_PAGO_PREFERENCE,
    payload: mpPreferenceId,
})

export const createMercadoPagoPreference = bookingId => async dispatch => {
    try {
        dispatch(createMercadoPagoPreferenceAction(await createMercadoPagoPreferenceApi(bookingId)))
    } catch (error) {
        dispatch(setErrorAction(error))
    }
}
