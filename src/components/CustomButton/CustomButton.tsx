import classNames from 'classnames';
import React from 'react'
import styles from "./CustomButton.module.css";
import { ICustomButtonProps } from './CustomButton.types';

export const CustomButton: React.FC<ICustomButtonProps> = (props) => {
    const { text, color = "#24292E", disabled } = props;
    const disabledClass = disabled ? "rgb(159 163 167)" : ""
    return (
        <div className={classNames(styles.buttonContainer, disabledClass)} style={{ background: disabledClass || color }} {...props}>{text}</div>
    )
}


