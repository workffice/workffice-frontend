import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { NewRole } from '../../components/Rol/NewRol';
import { readFromLocalStorage } from '../../infra/api/localStorage';
import { createRole } from '../../stores/actions/backoffice/rolesAction';



export const NewRoleContainer = () => {
    const dispatch = useDispatch();
    const officeBranch = readFromLocalStorage("officeBranch")
    const create = useCallback(async roleBody => {
        await dispatch(createRole(officeBranch.id, roleBody));
    }, [dispatch]);
    return <NewRole createRole={create}/>
}
