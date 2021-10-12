import { React } from 'react'
import { Alert } from "reactstrap"

export const Notification = ({ show, isError, message, hideNotification }) => {
    return (<Alert isOpen={show} color={isError ? "danger" : "success"} onClick={hideNotification}>
        {message}
        <button type="button" class="close" aria-label="Close" onClick={hideNotification}><span aria-hidden="true">×</span></button>
    </Alert>)
}