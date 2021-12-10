import { ICreateRequestOnCard, ILoginRequest, IRequestedCard, IRequestedCardResonse } from "./API.types";
import axios from "./axios";

export const login = async (data: ILoginRequest) => {
    const response = await axios.post("/api/auth/phone", data);
    return response.data;
}

export const getProducts = async (userId: string, token: string) => {
    const response = await axios.get(`/api/products/${userId}`, {
        headers: {
            "auth_token": token
        }
    })
    return response.data;
}

export const setMainProduct = async (productId: string, token: string) => {
    const response = await axios.post("/api/product/setmain", { product_id: productId }, {
        headers: {
            "auth_token": token
        }
    });
    return response.data;
}

export const createRequestOnCard = async (data: ICreateRequestOnCard, token: string) => {
    const response = await axios.post("/api/request/add", data, {
        headers: {
            "auth_token": token
        }
    });
    return response.data;
}

export const getAllCardRequests = async (userId: string, token: string): Promise<IRequestedCardResonse> => {
    const response = await axios.get(`/api/requests/${userId}`, {
        headers: {
            "auth_token": token
        }
    });
    return response.data;
}

export const fetchWallets = async (userId: string, token: string) => {
    const response = await axios.get(`/api/wallets/${userId}`, {
        headers: {
            "auth_token": token
        }
    });
    console.log(response.data);
    return response;
}