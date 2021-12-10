import React from 'react'
import styles from "./StoryItem.module.css";

export const StoryItem: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.date}></div>
            <div className={styles.operations}>
            </div>
        </div>
    )
}
