import classNames from 'classnames';
import React from 'react'
import styles from "./AccountCard.module.css";
import { IAccountCardProps } from './AccountCard.type';

export const AccountCard: React.FC<IAccountCardProps> = ({ accountName, accountNumber, balance, selected, onClick }) => {

    const handleOnClick = () => {
        onClick(accountName);
    }
    return (
        <div className={classNames(styles.container, selected ? styles.container_selected : "")} onClick={handleOnClick}>
            <div className={styles.wrapper}>
                <div className={styles.cardIcon}></div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardInfo__name}>{accountName}</div>
                    <div className={styles.cardInfo__number}>{accountNumber}</div>
                </div>
            </div>
            <div className={styles.balance}>{`${balance} Р`}</div>
        </div>
    )
}
