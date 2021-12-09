import axios from "axios";

export default axios.create({
    baseURL: "http://84.201.148.231:8008",
    headers: {
        "auth_token": "ae2a88ae6539ee0493fd693214a842c4"
    },
    responseType: "json"
});
