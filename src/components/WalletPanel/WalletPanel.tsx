import React from 'react'
import styles from "./WalletPanel.module.css";
import avatar from "../../assets/avatar.png";
import { CustomButton } from '../CustomButton/CustomButton';
import { IWalletPanelProps } from './WalletPanel.types';
import NumberFormat from 'react-number-format';

export const WalletPanel: React.FC<IWalletPanelProps> = ({ name, main_amount, regularity, balanceForecast, card_refill_amount }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.header__caption}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.amount}><NumberFormat value={main_amount} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></span>
                </div>
                <div className={styles.header__info}>
                    <div className={styles.regularity}>
                        <span className="regularity__period">{`${regularity}:`}</span>
                        <span className="regularity__sum"><NumberFormat value={card_refill_amount} displayType={'text'} thousandSeparator=" " prefix="+ " suffix=" ₽" /></span>
                    </div>
                    <div className={styles.forecast}>
                        <span className="forecast__caption">Прогноз остатка на неделю:</span>
                        <span className="forecast__sum"><NumberFormat value={balanceForecast} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></span>
                    </div>
                </div>
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
