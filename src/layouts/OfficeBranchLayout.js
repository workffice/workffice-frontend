// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { collaboratorOfficeBranchList, officeBranchList } from '../stores/actions/backoffice/officeBranchActions';
import { getUserMe } from '../stores/actions/backoffice/userActions';
import { routes } from "./office-branch.routes";


let ps;

export const OfficeBranchLayout = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userMe);
    React.useEffect(async () => {
        if (user === null || user === undefined)
            await dispatch(getUserMe());
    }, [user ? user.id : ""]);
    React.useEffect(async () => {
        if (user !== null) {
            await dispatch(officeBranchList(user.id));
            await dispatch(collaboratorOfficeBranchList(user.email));
        }
    }, [user]);

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
