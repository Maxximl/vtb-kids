import React from 'react'
import { Wallet } from '../Wallet/Wallet';
import styles from "./WalletList.module.css";
import { IWalletListProps } from './WalletList.types';
import avatarGirl from "./images/ava-girl.png";
import avatarBoy from "./images/avatar_boy.png";

export const WalletList: React.FC<IWalletListProps> = ({ caption }) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.caption}>{caption}</h2>
            </div>
            <Wallet avatar={avatarGirl} />
            <Wallet avatar={avatarBoy} />
        </div>
    )
}
