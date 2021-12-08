import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AccountCard } from '../../components/AccountCard/AccountCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import styles from "./ChooseAccountPage.module.css";

const accounts = [
    { accountName: "Visa Classic", accountNumber: "1122...9999", balance: 190060 },
    { accountName: "Visa Hihua", accountNumber: "1122...9900", balance: 8.17 }
]
export const ChooseAccountPage = () => {

    const [selectedId, setSeletedId] = useState<string>("");

    const renderAccounts = () => {
        return accounts.map(({ accountName, accountNumber, balance }) => {
            return <AccountCard key={accountName} accountName={accountName} accountNumber={accountNumber} balance={balance} onClick={handleOnClick} selected={selectedId === accountName} />
        })
    }

    const handleOnClick = (accountName: string) => {
        setSeletedId(accountName);
    }

    return (
        <div className={styles.container}  >
            <h2 className={styles.header}>
                Выберите основной счет
            </h2>
            <div className={styles.accounts}>
                {renderAccounts()}
            </div>
            {
                selectedId && (<div className={styles.continueWrapper}>
                    <div className={styles.agreement}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span className={styles.agreement__text}>Я прочитал соглашение, все понимаю и принимаю все риски</span>
                    </div>
                    <div className={styles.readyButton}>
                        <Link to="/wallets-add"><CustomButton text="Готово" /></Link>
                    </div>
                </div>)
            }
        </div>
    )
}
