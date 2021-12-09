import React from 'react'
import { useNavigate } from 'react-router';
import styles from "./RequestCard.module.css";
import { IRequestCardProps } from './RequestCard.types';

type ITranslationMap = {
    [key: string]: { displayName: string, color: string };
}

const translationMap: ITranslationMap = {
    VIRTUAL: { displayName: "Виртуальная карта", color: "#7615F9" },
    PLASTIC: { displayName: "Пластиковая карта", color: "#7615F9" },
    NEW: { displayName: "Новая", color: "#7615F9" },
    "IN PROGRESS": { displayName: "В работе", color: "#7615F9" },
    APPROVED: { displayName: "Карта готова", color: "#00B76A" },
    REJECTED: { displayName: "Отклонена", color: "#da2525" }
}
export const RequestCard: React.FC<IRequestCardProps> = ({ name_on_card, card_type, state }) => {
    const navigate = useNavigate();

    const handleOnRequestClick = () => {
        navigate("/card-ready");
    }

    return (
        <div className={styles.container} onClick={handleOnRequestClick}>
            <div className={styles.info}>
                <div className={styles.name}>{name_on_card}</div>
                <div className={styles.type} style={{ color: translationMap[card_type.toUpperCase()]?.color }}>{translationMap[card_type.toUpperCase()]?.displayName}</div>
            </div>
            <div className={styles.status} style={{ color: translationMap[state.toUpperCase()]?.color }}>{translationMap[state.toUpperCase()]?.displayName}</div>
        </div>
    )
}
