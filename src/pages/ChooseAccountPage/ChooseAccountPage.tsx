import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AccountCard } from '../../components/AccountCard/AccountCard';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { RootState } from '../../store/store';
import { getUserProducts } from '../../store/user/user.thunk';
import { setMainProduct } from '../../utils/API';
import { IProduct } from '../../utils/API.types';
import styles from "./ChooseAccountPage.module.css";
import spinner from "../../assets/spinner.gif";



export const ChooseAccountPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedId, setSeletedId] = useState<string>("");
    const { userId, products } = useSelector((state: RootState) => {

        return { userId: state.user.id, products: state.user.products };
    })

    useEffect(() => {
        if (userId) {
            dispatch(getUserProducts(userId));
        }
    }, [userId])

    useEffect(() => {

    }, [selectedId])

    const renderProducts = (products: IProduct[]) => {
        return products.map((product) => {
            return <AccountCard key={product.public_id} {...product} onClick={handleOnClick} selected={selectedId === product.public_id} />
        })
    }

    const handleOnClick = (id: string) => {
        setSeletedId(id);
    }

    const handleOnSetMainProduct = async () => {
        try {
            const response = await setMainProduct(selectedId);
            if (response === "ok") {
                navigate("/wallets-add")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.container}  >
            <h2 className={styles.header}>
                Выберите основной счет
            </h2>
            <div className={styles.accounts}>
                {products.length ? renderProducts(products) : <div className={styles.spinnerContainer}><img className={styles.spinner} src={spinner} alt="spinner" /></div>}
            </div>
            {
                selectedId && (<div className={styles.continueWrapper}>
                    <div className={styles.agreement}>
                        <input type="checkbox" className={styles.checkbox} />
                        <span className={styles.agreement__text}>Я прочитал соглашение, все понимаю и принимаю все риски</span>
                    </div>
                    <div className={styles.readyButton}>
                        <CustomButton text="Готово" onClick={handleOnSetMainProduct} />
                    </div>
                </div>)
            }
        </div>
    )
}
