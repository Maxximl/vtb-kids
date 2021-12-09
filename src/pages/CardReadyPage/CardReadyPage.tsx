import React from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomCheckbox } from '../../components/CustomCheckbox/CustomCheckbox';
import styles from "./CardReadyPage.module.css";

export const CardReadyPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Ваша карта готова</h2>
            <div className={styles.content}>
                <div className={styles.cardTemplate}></div>
                <div className={styles.row}>
                    <CustomCheckbox caption="Добавить в телефон" description="Добавьте в wallet для бесконтактной оплаты" />
                </div>
                <div className={styles.row}>
                    <CustomCheckbox caption="Начислить первые 500 ₽" description="Мгновенное зачисление" />
                </div>
                <div className={styles.row}>
                    <CustomCheckbox caption="Настроить параметры" description="Лимиты снятия наличных и оплаты в интернете" />
                </div>
                <div className={styles.goToWalletButton}>
                    <Link to="/wallets"> <CustomButton text="В кошелек" /></Link>
                </div>
            </div>
        </div>
    )
}
