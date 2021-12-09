import React, { useEffect, useState } from 'react'
import styles from "./RequestsPage.module.css";
import { RequestCard } from '../../components/RequestCard/RequestCard'
import { IRequestedCard } from '../../utils/API.types';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { getAllCardRequests } from '../../utils/API';


export const RequestsPage = () => {
    const userId = useSelector((state: RootState) => {
        return state.user.id;
    })
    const [requests, setRequests] = useState<IRequestedCard[]>([]);

    const getRequests = async () => {
        try {
            const response = await getAllCardRequests(userId);
            if (response?.requests) {
                setRequests(response.requests);
            }
        } catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        getRequests();
    }, [userId])

    const renderRequests = (requests: IRequestedCard[]) => {
        return requests.map((request) => {
            return <RequestCard key={request.id} {...request} />
        })
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Заявки</h2>
            <div className="requests">
                {renderRequests(requests)}
            </div>
        </div>
    )
}
