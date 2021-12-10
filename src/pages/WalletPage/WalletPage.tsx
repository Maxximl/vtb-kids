import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styles from "./WalletPage.module.css";
import plus from "../../assets/plus.png";
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { AccountCard } from '../../components/AccountCard/AccountCard';
import { WalletMiniCard } from '../../components/WalletMiniCard/WalletMiniCard';
import { OperationStory } from '../../components/OperationStory/OperationStory';
import { IWalletInfoResponse } from '../../utils/API.types';
import { getWalletInfo } from '../../utils/API';

export const WalletPage = () => {
    const params = useParams();
    const wallet = useSelector((state: RootState) => {
        return state.user.wallets.find(wallet => wallet.wallet_id === params.id)
    })
    const [walletInfo, setWalletInfo] = useState<IWalletInfoResponse | undefined>(wallet);

    const fetchWalletInfo = async () => {
        if (!wallet) {
            const data = await getWalletInfo(params.id);
            setWalletInfo(data);
        }
    }

    useEffect(() => {
        fetchWalletInfo();
    }, [params.id, wallet])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Кошелeк</h2><Link to="/add-card"><img src={plus} alt="" className={styles.addIcon} /></Link>
            </div>
            <div className={styles.content}>
                <div className={styles.products}>
                    {walletInfo?.products.map(product => {
                        return <WalletMiniCard key={product.product_id} {...walletInfo} products={[product]} />
                    })}
                </div>
                <div className={styles.operationStory}>
                    <OperationStory walletInfo={walletInfo} />
                </div>
            </div>
        </div>
    )
}
