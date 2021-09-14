import {  sdkAuthRequest } from ".";
import { API_OFFICE_BRANCHES, API_AUTH_URL, API_URL } from "../../environments/environment";
import { getUserToken } from "../../utils"; 

export const createColaborator = async (credentials) => {
    try {
      const token = getUserToken();

      const userMe = await sdkAuthRequest(
          `${API_AUTH_URL}/me`,
          {
              method: 'GET',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json; charset=utf8',
                  'Authorization': 'Bearer ' + token,
              }
          }
      )
      console.log("userMe",userMe);

      const officesBranchesData = await sdkAuthRequest(
        `${API_URL}/office_holders/${userMe.data.id}/office_branches/`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json; charset=utf8',
                'Authorization': 'Bearer ' + token,
            }
        }
    )
    console.log("officesBranchesData",officesBranchesData);

      const rolesData = await sdkAuthRequest(`${API_OFFICE_BRANCHES}/idOfficeBranch/roles/`,{
        method: 'GET',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf8',
          'Authorization': 'Bearer ' + token,
      }
      });
      console.log("rolesData",rolesData);
      const idRole = rolesData.data[0].id;
      console.log("idRole",idRole);

      const officeBranchId = officesBranchesData.data[0].id;
      console.log("officeBranchId",officeBranchId);
      await sdkAuthRequest(`${API_OFFICE_BRANCHES}/${officeBranchId}/collaborators/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf8',
          'Authorization': 'Bearer ' + token,
      },
        body: JSON.stringify(credentials)
      });
      console.log('Promise.resolve(): ', Promise.resolve());
      return Promise.resolve();
    } catch (error) {
      console.log('ERRORRRR 1111111: ', error);
      throw error.errors[0].error;
    }
  };