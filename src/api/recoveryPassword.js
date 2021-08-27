import { recoveryPassword } from "../infra/api/authentication"

export const recoveryPasswordAPI = async userEmail => {
    const result = await recoveryPassword(userEmail);
    return result;
}