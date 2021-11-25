import React from 'react'
import styles from "./Wallet.module.css";
import { IWalletProps } from './Wallet.types';
import cn from "classnames";

export const Wallet: React.FC<IWalletProps> = ({ avatar }) => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>

                <img className={styles.avatar__image} src={avatar} alt="" />
            </div>
            <div className="content">
                <div className={cn(styles.row, styles.content__header)}>
                    <span className="name">Аристарх</span>
                    <span className="balance">4060 р</span>
                </div>
                <div className={cn(styles.row, styles.content__body)}>
                    <span>Каждый понедельник</span>
                    <span>+1200 Р</span>
                </div>
                <div className={cn(styles.row, styles.content__body)}>
                    <span>Прогноз остатака на неделю</span>
                    <span>3260 р</span>
                </div>
                <div className={cn(styles.row, styles.content__body)}>
                    <span>Во всех копилках</span>
                    <span>11 678 р</span>
                </div>
            </div>
        </div>
    )
}
