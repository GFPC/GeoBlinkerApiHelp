import {api} from "./config";
import {LoginData} from "./types";

export async function _login(data: LoginData) {
    return await api.post(
        '/auth/login',
        data
    )
}
export async function _token(auth_hash: string) {
    return await api.post(
        '/token',
        {
            auth_hash: auth_hash
        }
    )
}