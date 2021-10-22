import { headerGet, headersPost, sdkAuthRequest } from "..";
import { API_URL } from "../../../environments/environment";

export const bookOffice = async (officeId, bookingBody) => {
    try {
        const booking = await sdkAuthRequest(`${API_URL}/offices/${officeId}/bookings/`, {
            method: 'POST',
            headers: headersPost,
            body: JSON.stringify(bookingBody)
        });
        return Promise.resolve(booking.data.uri.match("/api/bookings/(.*)/")[1]);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
};

export const getBooking = async bookingId => {
    try {
        const booking = await sdkAuthRequest(`${API_URL}/bookings/${bookingId}/`, {
            method: 'GET',
            headers: headerGet,
        });
        return Promise.resolve(booking.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}
