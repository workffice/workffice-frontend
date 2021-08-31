import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getHistory } from './infra/react-router/getHistory';
import { buildStore } from './infra/init/store';
import { reducers } from './stores';
import { Routes } from './infra/init/routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './assets/scss/paper-dashboard.scss?v=1.3.0';
import { ColaboratorScreen } from './components/colaborator/ColaboratorScreen';
import { NewColaborator } from './components/colaborator/NewColaborator';

const Init = () => {
  const history = getHistory();

  return (
    <Provider store={buildStore(reducers, history)}>
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/admin/colaborators" render={() => <ColaboratorScreen/>} />
          <Route path="/admin/newColaborator" render={() => <NewColaborator/>} />
          <Redirect to="/auth/login" />
        </Switch>
      </BrowserRouter>
      <Routes history={history} />
    </Provider>
  );
};

ReactDOM.render(<Init />, document.getElementById('root'));
