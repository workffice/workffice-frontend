import { setError, setIsLoading, setSuccess } from '..';
import { createCollaboratorApi, fetchCollaboratorsApi, updateCollaboratorApi } from '../../../api/backoffice/collaborator';
import { fetchCollaboratorsList } from './collaboratorsAction';

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
    dispatch(setSuccess())
    dispatch(fetchCollaboratorsList(await fetchCollaboratorsApi(officeBranchId)))
    return Promise.resolve("")
  } catch (error) {
    dispatch(setError(error ? error : 'No ha sido posible crear el colaborador'));
    return Promise.reject("")
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
