import { FETCH_CREATE_COLABORATOR } from '../../actions/backoffice/createCollaboratorAction';

const initialState = null;

export const createCollaboratorReducer = (state = initialState, { type, payload }) => {
  let currentState = state;
  if (type === FETCH_CREATE_COLABORATOR) {
    currentState = payload;
  }
  return currentState;
};
