import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'


export const OfficeBookings = ({
    loadBookings,
    bookings
}) => {

    const officeId = new URLSearchParams(useLocation().search).get("id")
    const currentDate = new Date()
    const [date, setDate] = useState(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)

    useEffect(() => {
        if (officeId)
            return loadBookings(officeId, date)
    }, [date])

    const updateDate = selectedDate => {
        setDate(`${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`)
    }
    console.log(updateDate)

    return (
        <div className="content">
            {console.log(bookings)}
        </div>
    )
}
