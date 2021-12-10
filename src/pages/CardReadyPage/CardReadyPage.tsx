import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomCheckbox } from '../../components/CustomCheckbox/CustomCheckbox';
import styles from "./CardReadyPage.module.css";
import check from "../../assets/check.svg";
import { usePages } from '../../hooks/usePages';

export const CardReadyPage = () => {
    const navigate = useNavigate();
    const { renderDots, handlers, currPage, handleSetCurrentPage } = usePages(1);


    const pages = [
        (<div className={styles.innerPage}><div className={styles.cardTemplate}></div>
            <div className={styles.row}>
                <CustomCheckbox caption="Добавить в телефон" description="Добавьте в wallet для бесконтактной оплаты" />
            </div>
            <div className={styles.row}>
                <CustomCheckbox caption="Начислить первые 500 ₽" description="Мгновенное зачисление" />
            </div>
            <div className={styles.row}>
                <CustomCheckbox caption="Настроить параметры" description="Лимиты снятия наличных и оплаты в интернете" />
            </div>
            <div className={styles.goToWalletButton}>
            </div></div>),
        (<div className={styles.innerPage}>  <h3 className={styles.caption}>Как получить карту?</h3>
            <div className={styles.row__check}>
                <img className={styles.check} src={check} alt="" />
                <div className={styles.extra}>
                    <span>Прийти в отделение ВТБ
                        с паспортом</span>
                    <div className={styles.offices}>
                        <span className={styles.offices__caption}>Отделения ВТБ поблизости: </span>
                        <ul className={styles.offices__list}>
                            <li>к1805, Зеленоград, Россия <br /> пн-пт 09:00–19:00; сб 10:00–17:00 <br /><a>Посмотреть на Яндекс.Картах</a></li>
                            <li>к401, Зеленоград, Россия <br /> пн-пт 09:00–20:00; сб 10:00–17:00 <br /> <a>Посмотреть на Яндекс.Картах</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.row__check}><img className={styles.check} src={check} alt="" /><p>Получить карту</p></div></div>)]

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Ваша карта готова</h2>
            <div className={styles.content} {...handlers}>
                {pages[currPage]}
                <div className={styles.stepProgress}>
                    {renderDots(2)}
                </div>
                <div className={styles.toWalletsButton}>
                    <CustomButton text={currPage === 0 ? "Далее" : "В кошелек"} onClick={() => {
                        handleSetCurrentPage(1)();
                        if (currPage === 1) {
                            handleSetCurrentPage(0);
                            navigate("/wallets");
                        }
                    }} />
                </div>
            </div>

        </div>
    )
}
