import { style } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Войти через ВТБ</h2>
            <div className={styles.login_type}>
                <span className={styles.login_type_tel}>Телефон</span>
                <span className={styles.login_type_login}>Логин</span>
                <span className={styles.login_type_card}>Карта</span>
            </div>
            <div className={styles.tel}>
                <CustomInput label="Телефон" />
            </div>
            <div className={styles.getCode}>
                <CustomButton color="#150266">
                    Получить код
                </CustomButton>
            </div>
            <div className={styles.smsCode}>
                <div className={styles.smsCode__caption}>Код из СМС</div>
                <CustomInput label="Код из СМС" />
            </div>
            <div className={styles.continue}>
                <CustomButton>
                    <Link to="/choose-acc">Понятно, поехали</Link>
                </CustomButton>
            </div>
        </div>
    )
}
