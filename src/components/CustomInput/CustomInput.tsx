import React, { useState } from 'react'
import styles from "./CustomInput.module.css";
import { ICustomInputProps } from './CustomInput.types';

export const CustomInput: React.FC<ICustomInputProps> = (props) => {
    const { label, value } = props
    const [focused, setFocused] = useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleOnFocus: React.FocusEventHandler<HTMLInputElement> | undefined = (e) => {
        setFocused(true);
    }

    const handleOnBlur: React.FocusEventHandler<HTMLInputElement> | undefined = (e) => {
        setFocused(false);
    }

    const handleOnClick = () => {
        inputRef.current?.focus();
    }

    const getLabelClass = () => {
        if (value != null || focused) {
            return styles.focused;
        } else {
            return ""
        }
    }
    return (
        <div className={styles.container} onClick={handleOnClick}>
            {<label className={getLabelClass()}>{label}</label>}
            <input {...props} ref={inputRef} type="text" onFocus={handleOnFocus} onBlur={handleOnBlur} />
        </div>
    )
}
