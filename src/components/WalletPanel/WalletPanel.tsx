import React from 'react'
import styles from "./WalletPanel.module.css";
import avatar from "../../assets/avatar.png";
import { CustomButton } from '../CustomButton/CustomButton';
import { IWalletPanelProps } from './WalletPanel.types';
import NumberFormat from 'react-number-format';
import { doTransaction } from '../../utils/API';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { IWalletProductResponse, ProductType } from '../../utils/API.types';
import { getWallets } from '../../store/user/user.thunk';

export const WalletPanel: React.FC<IWalletPanelProps> = ({ name, products, wallet_id, main_amount, regularity, balanceForecast, card_refill_amount, onClick }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { donor, userId } = useSelector((state: RootState) => {
        return { donor: state.user.products[1]?.public_id, userId: state.user.id }
    })

    const getCard = (products: IWalletProductResponse[]) => {
        return products.find(product => product.product_type === ProductType.Card)
    }
    const handleMoneyTransfer = async () => {
        const acceptor = getCard(products)?.product_id;
        if (acceptor) {
            await doTransaction({ donor, acceptor, amount: 50000 });
            dispatch(getWallets(userId));
        }


    }

    return (
        <div className={styles.container} >
            <div className={styles.header} onClick={() => onClick()}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.header__caption}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.amount}><NumberFormat value={main_amount / 100} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></span>
                </div>
                <div className={styles.header__info}>
                    <div className={styles.regularity}>
                        <span className="regularity__period">{`${regularity}:`}</span>
                        <span className="regularity__sum"><NumberFormat value={card_refill_amount / 100} displayType={'text'} thousandSeparator=" " prefix="+ " suffix=" ₽" /></span>
                    </div>
                    <div className={styles.forecast}>
                        <span className="forecast__caption">Прогноз остатка на неделю:</span>
                        <span className="forecast__sum"><NumberFormat value={balanceForecast / 100} displayType={'text'} thousandSeparator=" " suffix=" ₽" /></span>
                    </div>
                </div>
            </div>
            <div className={styles.refillButton}>
                <CustomButton text="Пополнить на 500 ₽" color="#FFF" onClick={handleMoneyTransfer} />
            </div>
            <div className={styles.createMoneyBoxButton}>
                <CustomButton text="Создать копилку" color="#FFF" />
            </div>
        </div>
    )
}
