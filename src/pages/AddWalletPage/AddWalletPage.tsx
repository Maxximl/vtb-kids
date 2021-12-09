import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import styles from "./AddWalletPage.module.css"
import check from "../../assets/check.svg";

export const AddWalletPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Кошельки</h2>
                <div className={styles.extraInfo}>
                    Создайте новый кошелек для близкого человека и создайте карту
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.content__instruction}>
                    <div className={styles.row}><img className={styles.check} src={check} alt="" /><p>Вы сможете регулярно пополнять кошелек, управлять лимитами и видеть историю транзакций</p></div>
                    <div className={styles.row}><img className={styles.check} src={check} alt="" /><p>Кошелек и карту можно выпустить для любого человека с 6 лет</p></div>
                    <div className={styles.row}><img className={styles.check} src={check} alt="" /><p>Для выпуска физической карты потребуется приехать в офис банка ВТБ</p></div>
                </div>
                <div className={styles.createButton}>
                    <Link to="/add-card"><CustomButton text="Создать Кошелек и Карту" /></Link>
                </div>
            </div>
        </div >
    )
}
