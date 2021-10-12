import { setError, setIsLoading, setSuccess } from '..';
import { createCollaboratorApi, updateCollaboratorApi } from '../../../api/backoffice/collaborator';

export const CREATE_COLABORATOR = 'CREATE_COLABORATOR';
export const UPDATE_COLABORATOR = 'UPDATE_COLABORATOR';

export const fetchCreateCollaborator = response => ({
  type: CREATE_COLABORATOR,
  payload: response,
});

export const createColaborator = (officeBranchId, collaboratorBody) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    dispatch(fetchCreateCollaborator(await createCollaboratorApi(officeBranchId, collaboratorBody)));
  } catch (error) {
    console.log(error)
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
    dispatch(setSuccess())
  } catch (error) {
    dispatch(setError(error ? error : 'No ha sido posible actualizar el colaborador'));
  } finally {
    dispatch(setIsLoading(false));
  }
};
