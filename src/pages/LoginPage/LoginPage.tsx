import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { AuthContext } from '../../context/authContext';
import { AppDispatch } from '../../store/store';
import { userLogin } from '../../store/user/user.thunk';
import { ILoginResponse } from '../../utils/API.types';
import styles from "./LoginPage.module.css";

export const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [phone, setPhone] = useState<string>("79201234567");
    const [vcode, setVcode] = useState<string>("6445");
    const [codeSent, setCodeSent] = useState<boolean>(false);

    const handleOnLogin = async () => {
        await dispatch(userLogin({ phone, vcode }))
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Войти через ВТБ</h2>
            <div className={styles.login_type}>
                <span className={styles.login_type_tel}>Телефон</span>
                <span className={styles.login_type_login}>Логин</span>
                <span className={styles.login_type_card}>Карта</span>
            </div>
            <div className={styles.tel}>
                <CustomInput label="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className={styles.getCode}>
                <CustomButton text="Получить код" color="#150266" onClick={() => setCodeSent(true)} />
            </div>
            {
                codeSent && (<div className={styles.loginSection}>
                    <div className={styles.smsCode}>
                        <div className={styles.smsCode__caption}>Код из СМС</div>
                        <CustomInput label="Код из СМС" value={vcode} onChange={(e) => setVcode(e.target.value)} />
                    </div>
                    <div className={styles.continue}>
                        {/* <Link to="/choose-acc"> </Link> */}
                        <CustomButton text="Войти" onClick={handleOnLogin} />
                    </div>
                </div>)
            }
        </div>
    )
}
