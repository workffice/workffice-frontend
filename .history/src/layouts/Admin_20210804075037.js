import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";

import PerfectScrollbar from 'perfect-scrollbar';
import Sidebar from "../components/Sidebar/Sidebar.js";
import AdminNavbar from '../components/Navbars/AdminNavbar';
import Footer from '../components/Footer/Footer';
// import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";
import routes from '../routes.js';

var ps;

export const AdminLayout = (props) => {
    const location = useLocation();
    // const [backgroundColor, setBackgroundColor] = React.useState("black");
    // const [activeColor, setActiveColor] = React.useState("info");
    // const [sidebarMini, setSidebarMini] = React.useState(false);
    const mainPanel = React.useRef();
    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            document.documentElement.className += " perfect-scrollbar-on";
            document.documentElement.classList.remove("perfect-scrollbar-off");
            ps = new PerfectScrollbar(mainPanel.current);
        }
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
                document.documentElement.className += " perfect-scrollbar-off";
                document.documentElement.classList.remove("perfect-scrollbar-on");
            }
        };
    });
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainPanel.current.scrollTop = 0;
    }, [location]);
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/admin") {
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
    // const handleActiveClick = (color) => {
    //     setActiveColor(color);
    // };
    // const handleBgClick = (color) => {
    //     setBackgroundColor(color);
    // };
    // const handleMiniClick = () => {
    //     if (document.body.classList.contains("sidebar-mini")) {
    //         setSidebarMini(false);
    //     } else {
    //         setSidebarMini(true);
    //     }
    //     document.body.classList.toggle("sidebar-mini");
    // };
    return (
        <div className="wrapper">
            <Sidebar
                {...props}
                routes={routes}
            />
            <div className="main-panel" ref={mainPanel}>
                <AdminNavbar {...props}/>
                <Switch>{getRoutes(routes)}</Switch>
                {
                    // we don't want the Footer to be rendered on full screen maps page
                    props.location.pathname.indexOf("full-screen-map") !== -1 ? null : (
                        <Footer fluid />
                    )
                }
            </div>

        </div>
    );
}

export default AdminLayout;