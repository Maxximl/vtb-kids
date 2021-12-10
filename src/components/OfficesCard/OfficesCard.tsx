import React from 'react'
import { IOfficeCardProps } from './OfficeCard.types'
import styles from "./OfficesCard.module.css";

export const OfficesCard: React.FC<IOfficeCardProps> = ({ hours, human_address, link, name }) => {
    return (
        <div className={styles.container}>
            <li>{human_address} <br /> {hours} <br /><a href={link}>Посмотреть на Яндекс.Картах</a></li>
        </div>
    )
}
