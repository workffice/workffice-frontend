import React from 'react';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import { Route, Switch } from 'react-router-dom';

import { routes } from "./office-branch.routes";
import { getUserMe } from '../stores/actions/backoffice/userActions';
import { officeBranchList } from '../stores/actions/backoffice/officebranchActions';
import { useDispatch, useSelector } from 'react-redux';

let ps;

export const OfficeBranchLayout = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getUserMe());
    }, []);
    const user = useSelector(state => state.userMe);
    React.useEffect(async () => {
        if (user !== null) {
            await dispatch(officeBranchList(user.id));
        }
    }, [user])

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
    const getRoutes = routes =>
        routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === '/office-branch') {
                return (
                    <Route
                        exact
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        });
    return (
        <>
            <div className="wrapper wrapper-full-page" ref={fullPages}>
                <div className="full-page section-image">
                    <Switch>{getRoutes(routes)}</Switch>
                </div>
            </div>
        </>
    );
}
