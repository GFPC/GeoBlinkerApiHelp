import {api} from "./config";
import {AuthContainer, EditUserData, LoginData, RegisterData} from "./types";

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
export async function _register(data: RegisterData) {
    return await api.post(
        '/register',
        data
    )
}
export async function _get_users_profiles(id_list: string[], auth: AuthContainer) {
    return await api.post(
        `/users/${id_list.join(',')}`,
        {
            ...auth
        },
    )
}

export async function _edit_me(data: EditUserData, auth: AuthContainer) {
    return await api.post(
        `/user`,
        {
            data: JSON.stringify(data),
            ...auth
        },
    )
}
export async function _get_my_profile(auth: AuthContainer) { // если от лица админа - информация о всех пользователях, для остальных об авторизированном пользователе.
    return await api.post(
        `/user`,
        {
            ...auth
        },
    )
}