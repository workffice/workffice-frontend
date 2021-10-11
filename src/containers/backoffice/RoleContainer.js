import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewRole } from '../../components/Role/NewRol';
import { RoleListComponent } from '../../components/Role/RoleListComponent';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { createRole, rolesList } from '../../stores/actions/backoffice/rolesAction';

export const NewRoleContainer = () => {
    const dispatch = useDispatch()
    const officeBranch = readFromLocalStorage("officeBranch")
    const create = useCallback(async roleBody => {
        await dispatch(createRole(officeBranch.id, roleBody))
    }, [dispatch])
    return <NewRole createRole={create}></NewRole>
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
