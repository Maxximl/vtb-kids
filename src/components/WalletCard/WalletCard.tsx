import React from 'react'
import styles from "./WalletCard.module.css";
import { IWalletCardProps } from './WalletCard.types';
import cn from "classnames";

export const WalletCard: React.FC<IWalletCardProps> = ({ name, balance, avatar, regularity, refill, balanceForecast }) => {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <img src={avatar} alt="Фото пользователя" />
                    </div>
                    <div className={styles.mainInfo}>
                        <div className={styles.name}>{name}</div>
                        <div className={styles.balance}>{`${balance}`}</div>
                    </div>
                </div>
                <div className="body">
                    <div className={cn(styles.regularity, styles.row)}>
                        <div>
                            <div className={styles.row__caption}>Регулярность:</div>
                            <div className={styles.regularity__value}>{regularity}</div>
                        </div>
                        <span className={styles.row__sum}>
                            {`+ ${refill} Р`}
                        </span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.row__caption}>Прогноз остатка на неделю:</span>
                        <span className={styles.row__sum}>{`${balanceForecast} Р`}</span>
                    </div>
                    <div className={styles.button_add}>
                        Пополнить сейчас
                    </div>
                    <div className={styles.row}>
                        <span className={styles.row__caption}>Во всех копилках:</span>
                        <span className={styles.row__sum}>{`${7200} Р`}</span>
                    </div>
                </div>
            </div >
        </div>
    )
}
