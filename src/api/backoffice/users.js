import { getMe } from "../../infra/api/backoffice/users";


export const userMeAPI = async () => {
    const userMe = await getMe();
    return userMe;
}