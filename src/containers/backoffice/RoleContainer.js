import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewRole } from '../../components/Role/NewRole';
import { RoleListComponent } from '../../components/Role/RoleListComponent';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { createRole, rolesList } from '../../stores/actions/backoffice/rolesAction';
import { hideNotification as hideNotificationAction } from '../../stores/actions/';

export const NewRoleContainer = () => {
    const dispatch = useDispatch()
    const officeBranch = readFromLocalStorage("officeBranch")
    const create = useCallback(async roleBody => {
        await dispatch(createRole(officeBranch.id, roleBody))
    }, [dispatch])
    const notification = useSelector(state => state.notification)
    const hideNotification = useCallback(async () => {
        await dispatch(hideNotificationAction())
    }, [dispatch])
    return <NewRole
        notification={notification}
        hideNotification={hideNotification}
        createRole={create}
    />
}

export const RolesListContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = readFromLocalStorage("officeBranch")
    const fetchRoles = useCallback(async () => {
        await dispatch(rolesList(officeBranch.id))
    }, [dispatch])
    const roles = useSelector(state => state.roles)
    return <RoleListComponent fetchRoles={fetchRoles} roles={roles}></RoleListComponent>
}
