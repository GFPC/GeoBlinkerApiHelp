export interface LoginData {
    login: string
    password?: string | number
    type: 'e-mail' | 'phone_code' | 'telegram_id,phone' | 'whatsapp,phone' | 'e-mail_code'
}

