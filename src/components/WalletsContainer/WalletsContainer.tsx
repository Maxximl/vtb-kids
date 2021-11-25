import React from 'react'
import {WalletList} from '../WalletList/WalletList';
import styles from "./WalletsContainer.module.css";

export default function WalletsContainer() {
    return (
        <div className={styles.container}>
            <WalletList caption="Дети" />
            <WalletList caption="Родители"/>
        </div>
    )
}
