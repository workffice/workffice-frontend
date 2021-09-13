import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import PerfectScrollbar from 'perfect-scrollbar';
import Sidebar from '../components/Sidebar/Sidebar.js';
import AdminNavbar from '../components/Navbars/AdminNavbar';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
import { routes } from './admin.routes.js';

let ps;

export const AdminLayout = props => {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on';
      document.documentElement.classList.remove('perfect-scrollbar-off');
      ps = new PerfectScrollbar(mainPanel.current);
    }
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off';
        document.documentElement.classList.remove('perfect-scrollbar-on');
      }
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const getRoutes = routes =>
    routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            exact
          />
        );
      } else {
        return null;
      }
    });
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <Sidebar {...props} routes={routes} bgColor={backgroundColor}
        activeColor={activeColor} />
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar {...props} />
        <Switch>{getRoutes(routes)}</Switch>
      </div>
      <FixedPlugin
        bgColor={backgroundColor}
        activeColor={activeColor}
        handleActiveClick={handleActiveClick}
        handleBgClick={handleBgClick}

      />
    </div>
  );
};

export default AdminLayout;
