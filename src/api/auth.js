import axios from './axios_base_2';

export function loginProses(payload) {
    return axios.post("/login", payload)
}