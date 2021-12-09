import { IProduct, IProductsResponse } from "../../utils/API.types";

export interface IUserState {
    auth_token: string,
    display_name: string,
    id: string,
    "products": IProduct[];
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