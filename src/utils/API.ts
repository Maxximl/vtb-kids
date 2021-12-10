import { ICreateRequestOnCard, IHistoryResponse, ILoginRequest, IProductHistoryResponse, IRequestedCard, IRequestedCardResonse, ITransactionRequest, IWalletInfoResponse } from "./API.types";
import axios from "./axios";

export const login = async (data: ILoginRequest) => {
    const response = await axios.post("/api/auth/phone", data);
    return response.data;
}

export const getProducts = async (userId: string) => {
    const response = await axios.get(`/api/products/${userId}`)
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

export const getAllCardRequests = async (userId: string,): Promise<IRequestedCardResonse> => {
    const response = await axios.get(`/api/requests/${userId}`);
    return response.data;
}

export const fetchWallets = async (userId: string) => {
    const response = await axios.get(`/api/wallets/${userId}`);
    console.log(response.data);
    return response;
}

export const getWalletInfo = async (walletId?: string): Promise<IWalletInfoResponse> => {
    const response = await axios.get(`/api/wallet/${walletId}`);
    console.log(response.data);
    return response.data;
}

export const doTransaction = async (data: ITransactionRequest) => {
    const response = await axios.post(`http://84.201.148.231:9009/api/abc/payment`, data);
    console.log(response.data);
    return response.data;
}

export const getWalletHistory = async (walletId?: string): Promise<IHistoryResponse> => {
    const response = await axios.get(`http://84.201.148.231:9009/api/abc/balance/history/${walletId}`);
    console.log(response.data);
    return response.data;
}

export const getProductHistory = async (productId?: string): Promise<IProductHistoryResponse> => {
    const response = await axios.get(`http://84.201.148.231:9009/api/abc/balance/history/${productId}`);
    console.log(response.data);
    return response.data;
}


