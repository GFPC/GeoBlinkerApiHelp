import {_register} from "../api";
import {RegisterData} from "../types";

export async function test_registerByPhone(phone: string, role: RegisterData['u_role']) {  // на данный момент доступны роли 1 2 3 5, 4 - админ - недоступно, но потребуется в будущем
    const register_res =  await _register({u_phone: phone, u_role: role})
    console.log('Response: ',register_res.data)
}

export async function test_registerByEmail(email: string, role: RegisterData['u_role']) {  // на данный момент доступны роли 1 2 3 5, 4 - админ - недоступно, но потребуется в будущем
    const register_res =  await _register({u_email: email, u_role: role})
    console.log('Response: ',register_res.data)
}

export async function test_registerByTelegram(telegramId: string, role: RegisterData['u_role']) {
    // TODO: это доступно только админу, в будущем надо будет попросить доработать бэк
}

export async function test_registerByWhatsApp(whatsappId: string, role: RegisterData['u_role']) {
    // TODO: это доступно только админу, в будущем надо будет попросить доработать бэк
}