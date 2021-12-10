import React, { useEffect, useState } from 'react'
import { getWalletHistory } from '../../utils/API';
import { IHistoryItem, IWalletProductResponse, ProductType } from '../../utils/API.types';
import styles from "./OperationStory.module.css";
import { IOperationStoryProps } from './OperationStory.types';

export const OperationStory: React.FC<IOperationStoryProps> = ({ walletInfo }) => {
    const [history, setHistory] = useState<IHistoryItem[]>([])

    const getCard = (products?: IWalletProductResponse[]) => {
        return products?.find(product => product.product_type === ProductType.Card)
    }
    const card = getCard(walletInfo?.products);

    const getHistory = async () => {
        const walletHistory = await getWalletHistory(card?.product_id);
        setHistory(walletHistory.history);
    }

    useEffect(() => {
        getHistory();
    }, [walletInfo])

    return (
        <div className={styles.container}>
            <h3 className={styles.header}>История операций</h3>
            <div className={styles.history}>
                {history.map(item => {
                    return <div>{item.ts}</div>
                })}
            </div>
        </div>
    )
}
