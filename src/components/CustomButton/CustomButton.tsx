import React from 'react'
import styles from "./CustomButton.module.css";
import { ICustomButtonProps } from './CustomButton.types';

export const CustomButton: React.FC<ICustomButtonProps> = (props) => {
    const { text, color = "#24292E" } = props;
    return (
        <div className={styles.buttonContainer} style={{ background: color }} {...props}>{text}</div>
    )
}


