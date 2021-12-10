export interface ILoginRequest {
    phone: string;
    vcode: string;
}

export interface ILoginResponse {
    auth_token: string,
    display_name: string,
    id: string,
    success: boolean;
}


export interface IProduct {
    "amount": number,
    "card_grade": string,
    "masked": string,
    "product_type": string,
    "public_id": string,
    "is_main": boolean,
    account_human_type: string,
}

export interface IProductsResponse {
    "id": string,
    products: IProduct[]
}

export interface IProductRequest {
    userId: string;
}


export interface ICreateRequestOnCard {
    "id": string;
    "name_on_card": string;
    "age"?: number;
    "card_type": CardType;
    "card_refill_amount"?: number;
    "card_refill_interval"?: number;
    "start_day_of_week": number;
}


export interface IRequestedCard {
    "card_refill_amount": number;
    "card_refill_interval": number;
    "card_type": string;
    "created": Date;
    "id": number;
    "name_on_card": string;
    "state": RequestState;
    "offices"?: IOfficeResponse[];
}

export interface IOfficeResponse {
    "hours": string;
    "human_address": string;
    "link": string;
    "name": string;
}

export interface IRequestedCardResonse {
    id: string;
    requests: IRequestedCard[];
}

export enum RequestState {
    New = "New",
    InProgress = "In progress",
    Approved = "Approved"
}

export enum CardType {
    Virtual = "virtual",
    Plastic = "plastic"
}

export interface IWalletInfoResponse {
    "balanceForecast": number;
    "card_refill_amount": number;
    "card_refill_interval": number;
    "card_type": CardType;
    "main_amount": number;
    "moneyboxes_amount": number,
    "name": string;
    "name_on_card": string;
    "products": IWalletProductResponse[],
    "regularity": string,
    "wallet_id": string
}

export enum ProductType {
    MoneyBox = "MONEYBOX",
    Card = "CARD"
}
export interface IWalletProductResponse {
    "amount": number,
    "masked_pan": string,
    "product_id": string,
    "product_type": ProductType,
}

export interface ITransactionRequest {
    "donor": string;
    "acceptor": string;
    "amount": number;
}

export interface IHistoryItem {
    "amount": number;
    "balance_after": number;
    "comment": string;
    "product_type": CardType;
    "ts": string;
    "type": TransferType;
}

export enum TransferType {
    Init = "init",
    Debit = "debit",
    Credit = "credit"
}

export interface IHistoryResponse {
    "history": IHistoryItem[];
}

export interface IProductHistoryResponse {
    "history": IProductHistoryItem[];
    "product_id": string;

}

export interface IProductHistoryItem {
    "amount": number;
    "balance_after": number;
    "ts": string;
    "type": TransferType;
}