import classNames from 'classnames';
import React, { useState } from 'react'
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import styles from "./AddNewCard.module.css";
import { RefillPeriod } from './AddNewCard.types';

const periodTabs = [{ period: RefillPeriod.Month, caption: "В месяц" }, { period: RefillPeriod.Week, caption: "В неделю" }];

export const AddNewCardPage = () => {

    const [refillPeriod, setRefillPeriod] = useState<RefillPeriod>(RefillPeriod.Month)

    const handlePeriodTabClick = (period: RefillPeriod) => () => {
        setRefillPeriod(period);
    }

    const periodInputs = {
        [RefillPeriod.Month]: <CustomInput label="Сумма в месяц" />,
        [RefillPeriod.Week]: <CustomInput label="Сумма в неделю" />
    }

    const renderPeriodTabs = () => {
        return periodTabs.map(({ caption, period }) => {
            const selectedClass = period === refillPeriod ? styles.periodTab_selected : "";
            return (
                <div className={classNames(styles.label, styles.label_selectable, selectedClass)} onClick={handlePeriodTabClick(period)}>{caption}</div>
            )
        })
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Добавление новой карты</h2>
            <div className={styles.row}>
                <div className={styles.label}>Для кого карта?</div>
                <CustomInput label="Имя на карте латинскими буквами" />
                <div className={styles.hint}>Укажите имя как в загранпаспорте</div>
            </div>
            <div className={styles.row}>
                <div className={styles.label}>Сколько лет подопечному?</div>
                <CustomInput label="Возраст" />
                <div className={styles.hint}>Виртуальная карта с 6 лет. Пластиковая - с 10 лет</div>
            </div>
            <div className={classNames(styles.row, styles.extraRow)}>
                <h3 className={styles.sectionHeader}>Пополнение</h3>
                <div className={styles.labels}>
                    {renderPeriodTabs()}
                </div>
                {periodInputs[refillPeriod]}
            </div>
            <div className={styles.needPlastic}>
                <input type="checkbox" name="" id="" className={styles.needPlastic__checkbox} />
                <div className={styles.miniSection}>
                    <div className={styles.miniSection__header}>Нужен пластик?</div>
                    <div className={styles.miniSection__description}>
                        Для выпуска пластиковой карты потребуется приехать в офис банка
                    </div>
                </div>
            </div>
            <div className={styles.orderCardButton}>
                <CustomButton text="Выпустить карту" />
            </div>
        </div>
    )
}
