export interface IAccountCardProps {
    accountName: string;
    accountNumber: string;
    balance: number;
    selected?: boolean;
    onClick: (accountName: string) => void;
}