import React from 'react'
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from '../components/Footer/Footer';
import { BackofficePage } from '../views/pages/backoffice/BackofficePage';

export const AdminLayout = () => {

    const fullPages = React.useRef();
    React.useEffect(() => {
        if (navigator.platform.indexOf('Win') > -1) {
            ps = new PerfectScrollbar(fullPages.current);
        }
        return function cleanup() {
            if (navigator.platform.indexOf('Win') > -1) {
                ps.destroy();
            }
        };
    });
    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === '/admin') {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    return (
        <>
            <AdminNavbar />
            <div className="wrapper wrapper-full-page" ref={fullPages}>
                <div className="full-page section-image">
                    <Switch>{getRoutes(routes)}</Switch>
                    <Footer fluid />
                </div>
            </div>

        </>
    )
}

export default AdminLayout;