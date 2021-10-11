import { setError, setIsLoading } from '..';
import { createCollaboratorApi } from '../../../api/backoffice/collaborator';

export const FETCH_CREATE_COLABORATOR = 'FETCH_CREATE_COLABORATOR';

export const fetchCreateCollaborator = credentials => ({
  type: FETCH_CREATE_COLABORATOR,
  payload: credentials ? credentials : null,
});

export const createColaborator = (credentials, officeBranchId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchCreateCollaborator(await createCollaboratorApi(credentials, officeBranchId)));
  } catch (error) {
    dispatch(setError(error ? error : 'No ha sido posible crear el colaborador'));
  } finally {
    dispatch(setIsLoading(false));
  }
};
