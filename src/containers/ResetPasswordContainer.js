import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../stores/actions/auth/resetPasswordAction';
import { ResetPasswordPage } from '../views/pages/authentication/ResetPasswordPage';

export const ResetPasswordContainer = () => {
    const loading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const onResetPassword = useCallback((token, password) => {
        dispatch(resetPassword(token, password));
    }, [])
    return <ResetPasswordPage onResetPassword={onResetPassword} loading={loading} error={error} />
}
