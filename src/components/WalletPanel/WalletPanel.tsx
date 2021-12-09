import React from 'react'
import styles from "./WalletPanel.module.css";
import avatar from "../../assets/avatar.png";
import { CustomButton } from '../CustomButton/CustomButton';

export const WalletPanel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={avatar} alt="" className={styles.avatar} />
            </div>
            <div className={styles.refillButton}>
                <CustomButton text="Пополнить на 500 ₽" color="#FFF" />
            </div>
            <div className={styles.createMoneyBoxButton}>
                <CustomButton text="Создать копилку" color="#FFF" />
            </div>
        </div>
    )
}
