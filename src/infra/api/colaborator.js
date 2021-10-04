import { headersPost, sdkAuthRequest } from ".";
import { API_OFFICE_BRANCHES } from "../../environments/environment";

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