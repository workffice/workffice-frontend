

import { useDispatch, useSelector } from 'react-redux'
import { NewOffice } from '../../components/Offices/NewOffice';

export const OfficeCreateContainer = () => {
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);
    const officeBranch = useSelector(state => state.officeBranch);
    const onCreate = useCallback(() => {
        dispatch(createOffice(officeBranch.id, office))
    }, []);

    return <NewOffice crete={onCreate} error={error} loading={loading} />
}
