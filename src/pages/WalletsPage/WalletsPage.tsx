import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { WalletCard } from '../../components/WalletCard/WalletCard';
import { AppDispatch } from '../../store/store';
import { fetchWallets } from '../../store/wallets/wallets.thunk';
import styles from "./WalletsPage.module.css";
import avatarGirl from "./images/avatar_girl.png";
import avatarBoy from "./images/avatar_boy.png";
import avatarGrandmother from "./images/avatar_grandmother.png";
import { TabsWrapper } from '../../components/TabsWrapper/TabsWrapper';
import { WalletPanel } from '../../components/WalletPanel/WalletPanel';
import { Link } from 'react-router-dom';

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
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Кошельки</h2>
            </div>
            <div className={styles.content}>
                <WalletPanel />
                <WalletPanel />
            </div>
        </div >
    )
}
