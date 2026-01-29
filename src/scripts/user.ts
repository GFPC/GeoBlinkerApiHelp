import {api} from "../config";
import {AuthContainer, EditUserData} from "../types";
import {_edit_me, _get_my_profile, _get_users_profiles} from "../api";

export async function test_get_users_profiles(id_list: string[], auth: AuthContainer) {
    return await _get_users_profiles(
        id_list,
        auth
    )
}
export async function test_edit_me(data: EditUserData, auth: AuthContainer) {
    return await _edit_me(
        data,
        auth
    )
}
export async function test_get_my_profile(auth: AuthContainer) {
    return await _get_my_profile(
        auth
    )
}