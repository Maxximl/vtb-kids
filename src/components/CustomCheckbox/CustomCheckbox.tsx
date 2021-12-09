import React from 'react'
import styles from "./CustomCheckbox.module.css";
import { ICustomCheckboxProps } from './CustomCheckbox.types';

export const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({ caption, description }) => {
    return (
        <div className={styles.container}>
            <input type="checkbox" name="" id="" className={styles.checkbox} />
            <div className={styles.miniSection}>
                <div className={styles.miniSection__header}>{caption}</div>
                <div className={styles.miniSection__description}>
                    {description}
                </div>
            </div>
        </div>
    )
}
