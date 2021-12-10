import axios from "axios";

export const BASE_URL = "http://84.201.148.231:8008";
export const storageKey = "userData";

const $api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
    headers: {
        "auth_token": "ae2a88ae6539ee0493fd693214a842c4"
    },
    responseType: "json"
});

$api.interceptors.request.use((config) => {
    const userData = JSON.parse(localStorage.getItem(storageKey) || "{}");
    if (userData?.token) {
        config.headers!.auth_token = userData?.token;
    }
    return config;
})

export default $api;
