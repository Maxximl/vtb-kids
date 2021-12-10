import { ICreateRequestOnCard, ILoginRequest, IRequestedCard, IRequestedCardResonse } from "./API.types";
import axios from "./axios";

export const login = async (data: ILoginRequest) => {
    const response = await axios.post("/api/auth/phone", data);
    return response.data;
}

export const getProducts = async (userId: string) => {
    const response = await axios.get(`/api/products/${userId}`)
    return response.data;
}

export const setMainProduct = async (productId: string) => {
    const response = await axios.post("/api/product/setmain", { product_id: productId });
    return response.data;
}

export const createRequestOnCard = async (data: ICreateRequestOnCard) => {
    const response = await axios.post("/api/request/add", data);
    return response.data;
}

export const getAllCardRequests = async (userId: string): Promise<IRequestedCardResonse> => {
    const response = await axios.get(`/api/requests/${userId}`);
    return response.data;
}

export const fetchWallets = async (userId: string) => {
    const response = await axios.get(`/api/wallets/${userId}`);
    console.log(response.data);
    return response.data;
}