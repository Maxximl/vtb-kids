import React, { useState } from 'react'
import { ITabsWrapperProps } from './TabsWrapper.types';
import styles from "./TabsWrapper.module.css";

export const TabsWrapper: React.FC<ITabsWrapperProps> = ({ children, tabs }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleOnTabClick = (idx: number) => () => {
        setCurrentIndex(idx);
    }

    const renderTabs = () => {
        return tabs.map((tab, idx) => {
            const selectedTab = currentIndex === idx;
            return (
                <span key={tab.caption} className={selectedTab ? styles.active : ""} onClick={handleOnTabClick(idx)}>{tab.caption}</span>
            )
        })
    }

    const renderBody = () => {
        const childsArray = React.Children.toArray(children);
        return childsArray[currentIndex];
    }

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {/* <span className={styles.active}>Дети</span>
                <span>Родители</span> */}
                {renderTabs()}
            </div>
            <div className={styles.cards}>
                {renderBody()}
            </div>
        </div>
    )
}
