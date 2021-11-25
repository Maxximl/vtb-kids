import cn from 'classnames';
import React from 'react'
import styles from "./Features.module.css";

export const Features = () => {
    return (
        <div>
            <h2 className={styles.header}>Функции</h2>
            {/* <div className={styles.row}>
                <div className={styles.feature}></div>
                <div className={styles.feature}></div>
                <div className={styles.feature}></div>
            </div>
            <div className={styles.feature}>
                <div className={styles.feature}></div>
            </div>
            <div className={styles.row}>
                <div className={styles.feature}></div>
                <div className={styles.feature}></div>
                <div className={styles.feature}></div>
                <div className={styles.feature}></div>
            </div> */}
            <div className={styles.grid}>
                <div className={styles.feature}>Лимиты и настройки</div>
                <div className={styles.feature}>Анализ и статистика</div>
                <div className={styles.feature}>Страховка</div>
                <div className={cn(styles.feature, styles.box4)}>Запросы на займ</div>
                <div className={styles.row}>
                    <div className={styles.feature}>Подарки</div>
                    <div className={styles.feature}>Копилки</div>
                    <div className={styles.feature}>Бонусы</div>
                    <div className={styles.feature}>Кэшбек</div>
                </div>
            </div>
        </div>
    )
}
