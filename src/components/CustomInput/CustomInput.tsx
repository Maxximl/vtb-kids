import React, { useState } from 'react'
import styles from "./CustomInput.module.css";
import { ICustomInputProps } from './CustomInput.types';

export const CustomInput: React.FC<ICustomInputProps> = ({ label }) => {

    const [focused, setFocused] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
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

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setValue(e.target.value);
    }

    const getLabelClass = () => {
        if (value || focused) {
            return styles.focused;
        } else {
            return ""
        }
    }
    return (
        <div className={styles.container} onClick={handleOnClick}>
            {<label className={getLabelClass()}>{label}</label>}
            <input ref={inputRef} type="text" onFocus={handleOnFocus} onBlur={handleOnBlur} value={value} onChange={handleOnChange} />
        </div>
    )
}
