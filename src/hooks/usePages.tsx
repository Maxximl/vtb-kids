import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import cn from "classnames";
import styles from "./usePages.module.css";

export const usePages = (maxPages: number) => {
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('swiped');
            if (currPage < maxPages) {
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

    const handleSetCurrentPage = (pageNumber: number) => () => {
        if (pageNumber <= maxPages) {
            setCurrPage(pageNumber);
        }
    }
    const renderDots = (length: number) => {
        const dots = [];
        for (let i = 0; i < length; i++) {
            const isCurrent = i === currPage;
            dots.push(
                (<div className={cn(styles.dot, isCurrent ? styles.current : "")} onClick={handleSetCurrentPage(i)}></div>)
            )
        }
        return dots;
    }

    return { renderDots, handlers, currPage, handleSetCurrentPage };
}