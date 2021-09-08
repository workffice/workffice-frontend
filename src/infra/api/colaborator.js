import { headersPost, sdkNoAuthRequest } from ".";
import { API_OFFICE_BRANCHES } from "../../environments/environment";

export const createColaborator = async (credentials) => {
    try {
      await sdkNoAuthRequest(`${API_OFFICE_BRANCHES}/4610cf51-209b-40ee-9118-67fd13505c3c/collaborators/`, {
        method: 'POST',
        headers: headersPost,
        body: JSON.stringify(credentials)
      });
      console.log('Promise.resolve(): ', Promise.resolve());
      return Promise.resolve();
    } catch (error) {
      console.log('ERRORRRR: ', error);
      throw error.errors[0].error;
    }
  };