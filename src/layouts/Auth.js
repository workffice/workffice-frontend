import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch } from 'react-router-dom';

import AuthNavbar from '../components/Navbars/AuthNavbar.js';
import Footer from '../components/Footer/Footer.js';

import routes from '../routes.js';

var ps;

function Pages() {
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
      if (prop.layout === '/auth') {
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
      <AuthNavbar />
      <div className="wrapper wrapper-full-page" ref={fullPages}>
        <div className="full-page section-image">
          <Switch>{getRoutes(routes)}</Switch>
          <Footer fluid />
        </div>
      </div>
    </>
  );
}

export default Pages;
