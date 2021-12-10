import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomCheckbox } from '../../components/CustomCheckbox/CustomCheckbox';
import styles from "./CardReadyPage.module.css";
import check from "../../assets/check.svg";
import { usePages } from '../../hooks/usePages';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { IOfficeResponse } from '../../utils/API.types';
import { OfficesCard } from '../../components/OfficesCard/OfficesCard';

export const CardReadyPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const request = useSelector((state: RootState) => {
        return state.user.requests.find(request => String(request.id) === params.id) || null;
    })
    const { renderDots, handlers, currPage, handleSetCurrentPage } = usePages(1);

    const renderOffices = (offices: IOfficeResponse[] | undefined) => {
        return offices?.map(office => {
            return <OfficesCard key={office.human_address} {...office} />
        })
    }

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
                    {request?.offices && <div className={styles.offices}>
                        <span className={styles.offices__caption}>Отделения ВТБ поблизости: </span>
                        <ul className={styles.offices__list}>
                            {renderOffices(request?.offices)}
                        </ul>
                    </div>}
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
