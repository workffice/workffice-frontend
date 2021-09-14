import { setError, setIsLoading } from '..';
import { createColaboratorApi } from '../../../api/colaborator';

export const FETCH_CREATE_COLABORATOR = 'FETCH_CREATE_COLABORATOR';

export const fetchCreateColaborator = credentials => ({
  type: FETCH_CREATE_COLABORATOR,
  payload: credentials ? credentials : null,
});

export const createColaborator = (credentials, officeBranchId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    await dispatch(fetchCreateColaborator(await createColaboratorApi(credentials, officeBranchId)));
  } catch (error) {
    await dispatch(setError(error ? error : 'No ha sido posible crear el colaborador'));
  } finally {
    await dispatch(setIsLoading(false));
  }
};
