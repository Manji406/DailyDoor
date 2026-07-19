import axios from 'axios';
export const client = axios.create({
    baseURL: "http://192.168.0.181:8000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    },
})