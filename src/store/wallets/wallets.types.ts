export interface IWallet {
    id: string;
    name: string;
    balance: number;
    refill: number;
    balanceForecast: number;
    totalMoneyBox: number;
}

export interface IWalletsState {
    wallets: IWallet[];
    status: "loading" | "idle";
    error: string | null;
}

export interface IAddWallet {
    wallet: IWallet;
}

export interface IAddWallets {
    wallets: IWallet[];
}

export interface IRemoveWallet {
    wallet: IWallet;
}

export interface FetchWalletsError {
    message: string;
};