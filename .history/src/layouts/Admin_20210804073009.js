import React from 'react'
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from '../components/Footer/Footer';
import { BackofficePage } from '../views/pages/backoffice/BackofficePage';

export const AdminLayout = () => {
    return (
        <>
            <AdminNavbar />
            <BackofficePage />
            <Footer />
        </>
    )
}

export default AdminLayout;