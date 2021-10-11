import { headerGet, headersPost, sdkAuthRequest } from ".";
import { API_OFFICE_BRANCHES, API_URL } from "../../environments/environment";

export const createColaborator = async (credentials, officeBranchId) => {
  try {
    const newColaborator = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/collaborators/`, {
      method: 'POST',
      headers: headersPost,
      body: JSON.stringify(credentials)
    });
    return Promise.resolve(newColaborator);
  } catch (error) {
    return Promise.reject(error.errors[0].error);
  }
};

export const fetchCollaborators = async officeBranchId => {
  try {
    const collaborators = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/collaborators/`, {
      method: 'GET',
      headers: headerGet,
    });
    return collaborators.data;
  } catch (error) {
    return error.errors[0].error;
  }
}


export const updateCollaborator = async (collaboratorId, collaboratorBody) => {
  try {
    const response = await sdkAuthRequest(`${API_URL}/collaborators/${collaboratorId}/`, {
      method: 'PUT',
      headers: headersPost,
      body: JSON.stringify(collaboratorBody),
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(error.errors[0].error);
  }
}