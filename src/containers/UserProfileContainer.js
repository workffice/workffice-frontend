import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../infra/api/backoffice/users';
import UserProfile from '../views/pages/backoffice/UserProfile';

export const UserProfileContainer = () => {
    const userMe = useSelector(state => state.userMe)
    const dispatch = useDispatch()
    const onUpdate = useCallback((id, userData) => {
        dispatch(updateUser(id, userData));
    }, []);

    return <UserProfile userMe={userMe} onUpdate={userData => onUpdate(userMe.id, userData)} />;
};
