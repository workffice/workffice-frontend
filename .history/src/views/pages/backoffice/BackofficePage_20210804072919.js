import React from 'react'
import AdminNavbar from '../../../components/Navbars/AdminNavbar';
import Footer from '../../../components/Footer'
import BackofficePage from '../backoffice/BackofficePage';
export const BackofficePage = () => {
    return (
        <>
            <AdminNavbar />
            <BackofficePage />
            <Footer />
        </>
    )
}
