import classNames from 'classnames';
import React from 'react'
import NumberFormat from 'react-number-format';
import styles from "./AccountCard.module.css";
import { IAccountCardProps } from './AccountCard.type';

export const AccountCard: React.FC<IAccountCardProps> = ({ card_grade, masked, amount, public_id, account_human_type, selected, onClick }) => {

    const handleOnClick = () => {
        onClick(public_id);
    }
    return (
        <div className={classNames(styles.container, selected ? styles.container_selected : "")} onClick={handleOnClick}>
            <div className={styles.wrapper}>
                <div className={styles.cardIcon}></div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardInfo__name}>{card_grade || account_human_type}</div>
                    <div className={styles.cardInfo__number}>{masked}</div>
                </div>
            </div>
            <div className={styles.balance}><NumberFormat value={amount / 100} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></div>
        </div>
    )
}
