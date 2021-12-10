import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { WalletCard } from '../../components/WalletCard/WalletCard';
import { AppDispatch, RootState } from '../../store/store';
import styles from "./WalletsPage.module.css";
import avatarGirl from "./images/avatar_girl.png";
import avatarBoy from "./images/avatar_boy.png";
import avatarGrandmother from "./images/avatar_grandmother.png";
import { TabsWrapper } from '../../components/TabsWrapper/TabsWrapper';
import { WalletPanel } from '../../components/WalletPanel/WalletPanel';
import { Link } from 'react-router-dom';
import { fetchWallets } from '../../utils/API';
import { IWalletInfoResponse } from '../../utils/API.types';
import { getWallets } from '../../store/user/user.thunk';
import spinner from "../../assets/spinner.gif";
import plus from "../../assets/plus.png";
import { AuthContext } from '../../context/authContext';

export const WalletsPage = () => {
    // const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(fetchWallets(1));
    // }, [dispatch])
    // return (
    //     <div className={styles.container}>
    //         <h2 className={styles.header}>
    //             Кошельки
    //         </h2>
    //         <div className={styles.cards}>
    //             {/* <TabsWrapper tabs={[{ caption: "Дети" }, { caption: "Родители" }]}>
    //                 <div className={styles.cards__list}>
    //                     <WalletCard name={"Никита"} balance={8160} refill={1060} balanceForecast={3200} totalMoneyBox={7200} avatar={avatarBoy} regularity={"Каждый понедельник"} />
    //                     <WalletCard name={"Алена"} balance={8160} refill={1060} balanceForecast={3200} totalMoneyBox={7200} avatar={avatarGirl} regularity={"Каждый понедельник"} />
    //                 </div>
    //                 <div className={styles.cards__list}>
    //                     <WalletCard name={"Бабуля"} balance={8160} refill={1060} balanceForecast={3200} totalMoneyBox={7200} avatar={avatarGrandmother} regularity={"Каждый понедельник"} />
    //                 </div>
    //             </TabsWrapper> */}
    //             <WalletPanel />
    //             <WalletPanel />
    //         </div>
    //     </div>
    // )
    const dispatch = useDispatch<AppDispatch>();
    const { logout } = useContext(AuthContext);

    const { userId, wallets } = useSelector((state: RootState) => {
        return { userId: state.user.id, wallets: state.user.wallets };
    })

    const getAllWallets = async () => {
        try {
            await dispatch(getWallets(userId));
        } catch (error) {
            logout();
        }
    }

    useEffect(() => {
        if (userId) {
            getAllWallets()
        }

    }, [userId])

    const renderWallets = (wallets: IWalletInfoResponse[]) => {
        if (!wallets.length) {
            return <div className={styles.spinnerContainer}><img className={styles.spinner} src={spinner} alt="spinner" /></div>
        }

        return wallets.map(wallet => {
            return <WalletPanel key={wallet.wallet_id} {...wallet} />
        })
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Кошельки</h2><Link to="/add-card"><img src={plus} alt="" className={styles.addIcon} /></Link>
            </div>
            <div className={styles.content}>
                {renderWallets(wallets)}
            </div>
        </div >
    )
}
