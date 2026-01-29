export interface LoginData {
    login: string
    password?: string | number
    type: 'e-mail' | 'phone_code' | 'telegram_id,phone' | 'whatsapp,phone' | 'e-mail_code'
}

export interface RegisterData {
    u_phone?: string
    u_email?: string
    u_tg?: string
    u_wa?: string
    u_role: '1' | '2' | '3' | '4' | '5'
}
export interface AuthContainer {
    token: string
    u_hash: string
}

export interface EditUserData {
    u_name?: string
    u_middle?: string
    u_family?: string
    u_email?: string
    u_details?: any
    u_phone?: string
}