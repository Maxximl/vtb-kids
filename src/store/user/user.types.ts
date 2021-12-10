import { IProduct, IProductsResponse, IRequestedCard, IRequestedCardResonse, IWalletInfoResponse } from "../../utils/API.types";

export interface IUserState {
    auth_token: string,
    display_name: string,
    id: string,
    products: IProduct[];
    wallets: IWalletInfoResponse[];
    requests: IRequestedCard[]
}


export interface ILogin {
    auth_token: string,
    display_name: string,
    id: string,
}

export interface ISetProducts {
    "id": string,
    products: IProduct[]
}

export interface ISetWallets {
    id: string;
    wallets: IWalletInfoResponse[];
}

export interface ISetRequests {
    id: string;
    requests: IRequestedCard[];
}