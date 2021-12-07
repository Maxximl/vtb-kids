import axios from "axios";

export default axios.create({
    baseURL: "http://84.201.148.231:8008",
    responseType: "json"
});