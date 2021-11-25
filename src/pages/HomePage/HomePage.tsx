import React from 'react'
import { Features } from '../../components/Features/Features'
import WalletsContainer from '../../components/WalletsContainer/WalletsContainer'
import styles from "./HomePage.module.css";

export const HomePage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.page__header}>Кошельки</h2>
            <div className={styles.content}>
                <WalletsContainer />
                <Features />
            </div>
        </div>
    )
}
