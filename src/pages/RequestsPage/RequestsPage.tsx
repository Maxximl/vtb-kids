import React, { useContext, useEffect } from 'react'
import styles from "./RequestsPage.module.css";
import { RequestCard } from '../../components/RequestCard/RequestCard'
import { IRequestedCard } from '../../utils/API.types';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/authContext';
import spinner from "../../assets/spinner.gif";
import { getRequests } from '../../store/user/user.thunk';

export const RequestsPage = () => {
    const { logout, token } = useContext(AuthContext);
    const dispatch = useDispatch<AppDispatch>();
    const { userId, requests } = useSelector((state: RootState) => {
        return { userId: state.user.id, requests: state.user.requests };
    })

    const getAllRequests = async () => {
        await dispatch(getRequests(userId));
    }
    useEffect(() => {
        if (userId) {
            getAllRequests();
        }
    }, [userId])

    const renderRequests = (requests: IRequestedCard[]) => {
        if (!requests.length) {
            return <div className={styles.spinnerContainer}><img className={styles.spinner} src={spinner} alt="spinner" /></div>
        }
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
