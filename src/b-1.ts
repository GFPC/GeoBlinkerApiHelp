import axios from "axios";
import askQuestion from "./utils/input";

const base_url = 'https://geoblinker.ru/taxi/c/Assist/api/v1/'
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
}
const api = axios.create({
    baseURL: base_url,
    headers: headers
})

interface LoginData {
    login: string
    password?: string | number
    type: 'e-mail' | 'phone' | 'tg' | 'whatsapp' | 'wa' | 'telegram_id' | 'phone_code'
}


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
export async function test_loginByEmailAndPassword(email: string, password: string) {
    const login_res =  await _login({login: email, password, type: 'e-mail'})
    const token_res = await _token(login_res.data.auth_hash)
    const {token, u_hash} = token_res.data.data
    console.log('token: ', token, '\nu_hash: ', u_hash, '\nauth_user: ', token_res.data.auth_user)
}

export async function test_loginByPhoneCode(phone: string) {
    const login_res =  await _login({login: phone, type: 'phone_code', password: ''}) // password='' - запрашиваем код
    console.log('Response: ',login_res.data)

    //ждем код, а при получении кода повторяем _login, но уже с кодом в поле password
    const code_from_user = await askQuestion('Enter code: ')
    const login_res2 =  await _login({login: phone, type: 'phone_code', password: code_from_user})
    console.log('Response: ',login_res2.data)

    const token_res = await _token(login_res2.data.auth_hash)
    const {token, u_hash} = token_res.data.data
    console.log('token: ', token, '\nu_hash: ', u_hash, '\nauth_user: ', token_res.data.auth_user)
}
test_loginByPhoneCode('79135550015')
//test_loginByEmailAndPassword('doctor@doctor.ru', '093588059')

