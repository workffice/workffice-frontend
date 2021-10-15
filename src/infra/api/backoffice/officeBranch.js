import { headerGet, headersPost, sdkAuthRequest, sdkNoAuthRequest } from ".."
import { API_OFFICE_BRANCHES, API_OFFICE_HOLDERS } from "../../../environments/environment"
import { writeToLocalStorage } from "../localStorage";

export const createOfficeBranchInfra = async ({
    name,
    description,
    phone,
    image,
    province,
    city,
    street,
    zipCode
}, userId) => {
    try {
        console.log(userId)
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "testworkffice")
        data.append("cloud_name", "workffice")
        const imageData = await fetch("  https://api.cloudinary.com/v1_1/workffice/image/upload", {
            method: "post",
            body: data
        }).then(resp => resp.json())
        const officeBranch = await sdkAuthRequest(
            `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
            {
                method: 'POST',
                headers: headersPost,
                body: JSON.stringify({
                    name,
                    description,
                    phone,
                    province,
                    city,
                    street,
                    zipCode,
                    imagesUrls: [imageData.public_id],
                })
            }
        );
        return Promise.resolve(officeBranch.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }

}

export const editOfficeBranchInfra = async (officeBranchData, officeBranchId) => {
    try {
        const officeBranch = await sdkAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeBranchId}/`,
            {
                method: 'PUT',
                headers: headersPost,
                body: JSON.stringify(officeBranchData)
            }
        );
        return Promise.resolve(officeBranch.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}

export const getOfficeBranchesInfra = async (userId) => {
    try {
        const officesBranches = await sdkNoAuthRequest(
            `${API_OFFICE_HOLDERS}/${userId}/office_branches/`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        return Promise.resolve(officesBranches.data)
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}

export const getOfficeBranchesFromCollaborator = async collaboratorEmail => {
    try {
        const officesBranches = await sdkAuthRequest(
            `${API_OFFICE_BRANCHES}/?collaborator_email=${collaboratorEmail}`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        return Promise.resolve(officesBranches.data)
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }
}

export const getOfficeBranchInfra = async (officeBranchId) => {
    try {
        const officeBranch = await sdkNoAuthRequest(
            `${API_OFFICE_BRANCHES}/${officeBranchId}/`,
            {
                method: 'GET',
                headers: headerGet
            }
        )
        writeToLocalStorage(officeBranch.data, "officeBranch")
        return Promise.resolve(officeBranch.data);
    } catch (error) {
        return Promise.reject(error.errors[0]);
    }

}