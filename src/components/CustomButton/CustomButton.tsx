import React from 'react'
import styles from "./CustomButton.module.css";
import { ICustomButtonProps } from './CustomButton.types';

export const CustomButton: React.FC<ICustomButtonProps> = ({ text, color = "#24292E" }) => {
    return (
        <div className={styles.buttonContainer} style={{ background: color }}>{text}</div>
    )
}


