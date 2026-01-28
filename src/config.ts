import axios from "axios";

const config = {
    base_url: 'https://geoblinker.ru/taxi/c/Assist/api/v1/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}

export const api = axios.create({
    baseURL: config.base_url,
    headers: config.headers
})