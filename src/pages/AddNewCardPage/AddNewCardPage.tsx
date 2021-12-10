import classNames from 'classnames';
import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { AuthContext } from '../../context/authContext';
import { RootState } from '../../store/store';
import { createRequestOnCard } from '../../utils/API';
import { CardType } from '../../utils/API.types';
import styles from "./AddNewCard.module.css";
import { RefillPeriod } from './AddNewCard.types';

const periodTabs = [{ id: 1, period: RefillPeriod.Month, caption: "В месяц" }, { id: 2, period: RefillPeriod.Week, caption: "В неделю" }];

export const AddNewCardPage = () => {
    const { logout, token } = useContext(AuthContext);

    const navigate = useNavigate();
    const userId = useSelector((state: RootState) => {
        return state.user.id;
    })

    const [nameOnCard, setNameOnCard] = useState<string>("");
    const [age, setAge] = useState<number>();
    const [refillInterval, setRefillInterval] = useState<RefillPeriod>(RefillPeriod.Month);
    const [refillAmount, setRefillAmount] = useState<number>()
    const [cardType, setCardType] = useState<CardType>(CardType.Virtual);

    const handlePeriodTabClick = (period: RefillPeriod) => () => {
        setRefillInterval(period);
    }


    const handleOnRefillAmountChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = parseInt(event.target.value);
        if (Number.isNaN(value)) {
            setRefillAmount(undefined);
        } else {
            setRefillAmount(value);
        }
    }

    const periodInputs = {
        [RefillPeriod.Month]: <CustomInput label="Сумма в месяц" value={refillAmount} onChange={handleOnRefillAmountChange} />,
        [RefillPeriod.Week]: <CustomInput label="Сумма в неделю" value={refillAmount} onChange={handleOnRefillAmountChange} />
    }
    const handleTypeCardChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        if (event.target.checked) {
            setCardType(CardType.Plastic);
        } else {
            setCardType(CardType.Virtual);
        }
    }

    const handleOnChangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setNameOnCard(event.target.value);
    }

    const handleOnAgeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = parseInt(event.target.value);
        if (Number.isNaN(value)) {
            setAge(undefined);
        } else {
            setAge(value);
        }
    }
    const renderPeriodTabs = (periodTabs: any[]) => {
        return periodTabs.map(({ caption, period, id }) => {
            const selectedClass = period === refillInterval ? styles.periodTab_selected : "";
            return (
                <div key={id} className={classNames(styles.label, styles.label_selectable, selectedClass)} onClick={handlePeriodTabClick(period)}>{caption}</div>
            )
        })
    }

    const handleOnCreateRequest = async () => {
        try {
            await createRequestOnCard({
                id: userId,
                "name_on_card": nameOnCard,
                "age": age,
                "card_type": cardType,
                "card_refill_amount": refillAmount,
                "card_refill_interval": refillInterval,
                "start_day_of_week": 1
            }, token)
            navigate("/requests");
        } catch (error) {
            console.error(error);
            logout();
        }
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Добавление новой карты</h2>
            <div className={styles.row}>
                <div className={styles.label}>Для кого карта?</div>
                <CustomInput label="Имя на карте латинскими буквами" value={nameOnCard} onChange={handleOnChangeName} />
                <div className={styles.hint}>Укажите имя как в загранпаспорте</div>
            </div>
            <div className={styles.row}>
                <div className={styles.label}>Сколько лет подопечному?</div>
                <CustomInput label="Возраст" value={age} onChange={handleOnAgeChange} />
                <div className={styles.hint}>Виртуальная карта с 6 лет. Пластиковая - с 10 лет</div>
            </div>
            <div className={classNames(styles.row, styles.extraRow)}>
                <h3 className={styles.sectionHeader}>Пополнение</h3>
                <div className={styles.labels}>
                    {renderPeriodTabs(periodTabs)}
                </div>
                {periodInputs[refillInterval]}
            </div>
            <div className={styles.needPlastic}>
                <input type="checkbox" checked={cardType === CardType.Plastic} className={styles.needPlastic__checkbox} onChange={handleTypeCardChange} />
                <div className={styles.miniSection}>
                    <div className={styles.miniSection__header}>Нужен пластик?</div>
                    <div className={styles.miniSection__description}>
                        Для выпуска пластиковой карты потребуется приехать в офис банка
                    </div>
                </div>
            </div>
            <div className={styles.orderCardButton}>
                <CustomButton text="Выпустить карту" onClick={handleOnCreateRequest} />
            </div>
        </div>
    )
}
