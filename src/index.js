import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { getHistory } from './infra/react-router/getHistory';
import { buildStore } from './infra/init/store';
import { reducers } from './stores';
import AuthLayout from './layouts/Auth.js';
import AdminLayout from './layouts/Admin.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './assets/scss/paper-dashboard.scss?v=1.3.0';

const Init = () => {
  const history = getHistory();

  return (
    <Provider store={buildStore(reducers, history)}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect to="/auth/login" />
        </Switch>
      </BrowserRouter>
      ,
    </Provider>
  );
};

ReactDOM.render(<Init />, document.getElementById('root'));
