import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable';
import styles from "./HelloPage.module.css";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import cn from 'classnames';
import { Link } from 'react-router-dom';

const MAX_PAGES = 1;
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
            if (currPage < MAX_PAGES) {
                setCurrPage(currPage + 1);
            }
        }, onSwipedRight: () => {
            console.log('swipedRight');
            if (currPage > 0) {
                setCurrPage(currPage - 1);
            }
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

                <Link to="/login"><CustomButton text="Понятно, поехали" /></Link>
            </div>

            <div className={styles.noAccMessage}>
                Нет аккаунта ВТБ?
            </div>
            <div className={styles.createAccButton}>
                <CustomButton text="Создать аккаунт ВТБ" color="rgba(255, 255, 255, 0.2)" />
            </div>
        </div>)]
    return (
        <div className={styles.container} {...handlers}>
            {pages[currPage]}
        </div>
    )
}
