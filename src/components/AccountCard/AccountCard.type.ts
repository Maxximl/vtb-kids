import { IProduct } from "../../utils/API.types";

export interface IAccountCardProps extends IProduct {
    selected?: boolean;
    onClick: (accountName: string) => void;
}