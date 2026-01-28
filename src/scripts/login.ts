import {_login, _token} from "../api";
import askQuestion from "../utils/input";

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
export async function test_loginByTelegramCode(phone: string) {
    const login_res =  await _login({login: phone, type: 'telegram_id,phone', password: ''}) // password='' - запрашиваем код
    console.log('Response: ',login_res.data)

    //ждем код, а при получении кода повторяем _login, но уже с кодом в поле password
    const code_from_user = await askQuestion('Enter code: ')
    const login_res2 =  await _login({login: phone, type: 'telegram_id,phone', password: code_from_user})
    console.log('Response: ',login_res2.data)

    const token_res = await _token(login_res2.data.auth_hash)
    const {token, u_hash} = token_res.data.data
    console.log('token: ', token, '\nu_hash: ', u_hash, '\nauth_user: ', token_res.data.auth_user)
}
export async function test_loginByWhatsapp(phone: string) {
    const login_res =  await _login({login: phone, type: 'whatsapp,phone', password: ''}) // password='' - запрашиваем код
    console.log('Response: ',login_res.data)

    //ждем код, а при получении кода повторяем _login, но уже с кодом в поле password
    const code_from_user = await askQuestion('Enter code: ')
    const login_res2 =  await _login({login: phone, type: 'whatsapp,phone', password: code_from_user})
    console.log('Response: ',login_res2.data)

    const token_res = await _token(login_res2.data.auth_hash)
    const {token, u_hash} = token_res.data.data
    console.log('token: ', token, '\nu_hash: ', u_hash, '\nauth_user: ', token_res.data.auth_user)
}
export async function test_loginByEmailCode(email: string) {
    const login_res =  await _login({login: email, type: 'e-mail_code', password: ''}) // password='' - запрашиваем код
    console.log('Response: ',login_res.data)

    //ждем код, а при получении кода повторяем _login, но уже с кодом в поле password
    const code_from_user = await askQuestion('Enter code: ')
    const login_res2 =  await _login({login: email, type: 'e-mail_code', password: code_from_user})
    console.log('Response: ',login_res2.data)

    const token_res = await _token(login_res2.data.auth_hash)
    const {token, u_hash} = token_res.data.data
    console.log('token: ', token, '\nu_hash: ', u_hash, '\nauth_user: ', token_res.data.auth_user)
}