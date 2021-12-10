import React from 'react'
import NumberFormat from 'react-number-format';
import { CardType, ProductType } from '../../utils/API.types';
import styles from "./WalletMiniCard.module.css";
import { IWalletMiniCardProps } from './WalletMiniCard.types';

export const WalletMiniCard: React.FC<IWalletMiniCardProps> = ({ name, main_amount, products }) => {
    const product = products?.[0];

    if (!product) {
        return null;
    }
    return (
        <div className={styles.container} >
            <div className={styles.wrapper}>
                <div className={styles.cardIcon}></div>
                <div className={styles.cardInfo}>
                    <div className={styles.cardInfo__name}>{name}</div>
                    <div className={styles.cardInfo__number}>{product.masked_pan}</div>
                </div>
            </div>
            <div className={styles.balance}><NumberFormat value={main_amount! / 100} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></div>
        </div>
    )
}
