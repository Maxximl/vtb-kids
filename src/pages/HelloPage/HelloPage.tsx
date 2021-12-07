import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import styles from "./HelloPage.module.css";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import cn from 'classnames';
import { Link } from 'react-router-dom';
import API from '../../utils/API';

export const HelloPage = () => {

    // useEffect(() => {
    //     const getApi = async () => {
    //         const response = await API.post("/api/auth/phone", {
    //             phone: "900",
    //             vcode: "123"
    //         },
    //             {
    //                 headers: {
    //                     "auth_token": "ae2a88ae6539ee0493fd693214a842c4"
    //                 }
    //             }

    //         );
    //         console.log(response);
    //     }
    //     getApi();
    // }, [])
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('swiped');
            setCurrPage(currPage + 1);
        }, onSwipedRight: () => {
            console.log('swipedRight');
            setCurrPage(currPage - 1);
        }
    })
    const [currPage, setCurrPage] = useState<number>(0);

    const renderDots = (length: number) => {
        const dots = [];
        for (let i = 0; i < length; i++) {
            const isCurrent = i === currPage;
            dots.push(
                (<div className={cn(styles.dot, isCurrent ? styles.current : "")}></div>)
            )
        }
        return dots;
    }
    const pages = [(
        <div className={styles.page}>
            <h1>Привет!</h1>
        </div>
    ),
    (
        <div className={styles.page}>
            <div className={styles.instruction}>
                Привяжи свой аккаунт ВТБ к приложению
            </div>
            <div className={styles.stepProgress}>
                {renderDots(5)}
            </div>
            <div className={styles.continueButton}>
                <CustomButton text="" >
                    <Link to="/login">Понятно, поехали</Link>
                </CustomButton>
            </div>

            <div className={styles.noAccMessage}>
                Нет аккаунта ВТБ?
            </div>
            <div className={styles.createAccButton}>
                <CustomButton color="rgba(255, 255, 255, 0.2)" >
                    Создать аккаунт ВТБ
                </CustomButton>
            </div>
        </div>)]
    return (
        <div className={styles.container} {...handlers}>
            {pages[currPage]}
        </div>
    )
}
