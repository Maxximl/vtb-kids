import { IWalletInfoResponse } from "../../utils/API.types";

export interface IWalletPanelProps extends IWalletInfoResponse {
    onClick: () => void;
}