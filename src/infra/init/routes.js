

import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { ProtectedRoute } from '../routes/ProtectedRoute';
import { Redirect } from 'react-router-dom';
import AdminLayout from '../../layouts/Admin'
import AuthLayout from '../../layouts/Auth'

export const Routes = (props) => (
    <ConnectedRouter history={props.history}>
        <>
            <Switch>
                <Route path="/auth" render={props => <AuthLayout {...props} />} />
                <ProtectedRoute
                    path="/"
                    component={AdminLayout}
                    authenticationPath="/auth/login"
                />
                <Redirect to="/auth/login" />
            </Switch>
        </>
    </ConnectedRouter>
);


