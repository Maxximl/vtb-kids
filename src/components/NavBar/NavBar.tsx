import React from 'react'
import styles from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { OtherHousesOutlined, PeopleAltOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material';

export const NavBar = () => {
    return (
        <div className={styles.container}>

            <NavLink to="/" >
                <OtherHousesOutlined />
            </NavLink>
            <NavLink to="/chats" >
                <PeopleAltOutlined />
            </NavLink>
            <NavLink to="/wallets"  >
                < AccountBalanceWalletOutlined />
            </NavLink>

        </div>
    )
}
