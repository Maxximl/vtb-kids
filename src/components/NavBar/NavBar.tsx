import React from 'react'
import styles from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { HomeOutlined, PeopleOutline, AccountBalanceWalletOutlined } from "@material-ui/icons"

export const NavBar = () => {
    return (
        <div className={styles.container}>

            <NavLink to="/" >
                <HomeOutlined />
            </NavLink>
            <NavLink to="/chats" >
                <PeopleOutline />
            </NavLink>
            <NavLink to="/test"  >
                < AccountBalanceWalletOutlined />
            </NavLink>

        </div>
    )
}
