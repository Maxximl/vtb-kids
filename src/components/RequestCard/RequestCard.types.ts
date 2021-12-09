import { IRequestedCard } from "../../utils/API.types";

export interface IRequestCardProps extends IRequestedCard {

}

export enum RequestStatus {
    Ready,
    InBank,
    Processing
}