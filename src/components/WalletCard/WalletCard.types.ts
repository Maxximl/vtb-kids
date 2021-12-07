export interface IWalletCardProps {
    name: string;
    balance: number;
    refill: number;
    regularity: string;
    balanceForecast: number;
    totalMoneyBox: number;
    avatar: string;
    // type?: WalletType;
}

export enum WalletType {
    Chilren,
    Parent
}
