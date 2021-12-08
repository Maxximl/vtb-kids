import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import styles from "./AddWalletPage.module.css"

export const AddWalletPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Кошельки</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.content__instruction}>
                    <p>Создайте новый кошелек для близкого человека и выпустите для него обычную или виртуальную карту.</p>
                    <p>Вы сможете регулярно пополнять кошелек, управлять лимитами и видеть историю транзакций</p>
                    <p>Кошелек и карту можно выпустить для любого человека с 6 лет</p>
                    <p>Для выпуска физической карты потребуется приехать в офис банка ВТБ</p>
                </div>
                <div className={styles.createButton}>
                    <Link to="/add-card"><CustomButton text="Создать Кошелек и Карту" /></Link>
                </div>
            </div>
        </div >
    )
}
