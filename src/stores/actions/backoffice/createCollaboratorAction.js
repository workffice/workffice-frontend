import { setError, setIsLoading } from '..';
import { createCollaboratorApi, updateCollaboratorApi } from '../../../api/backoffice/collaborator';

export const FETCH_CREATE_COLABORATOR = 'FETCH_CREATE_COLABORATOR';
export const UPDATE_COLABORATOR = 'UPDATE_COLABORATOR';

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

export const updateCollaboratorAction = response => ({
  type: UPDATE_COLABORATOR,
  payload: response,
});

export const updateCollaborator = (collaboratorId, collaboratorBody) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(updateCollaboratorAction(await updateCollaboratorApi(collaboratorId, collaboratorBody)));
  } catch (error) {
    dispatch(setError(error ? error : 'No ha sido posible actualizar el colaborador'));
  } finally {
    dispatch(setIsLoading(false));
  }
};
