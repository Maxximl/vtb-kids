import React from 'react'
import styles from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import { OtherHousesOutlined, PeopleAltOutlined, AccountBalanceWalletOutlined } from '@mui/icons-material';
import vtb from "../../assets/vtb.png";
import wallet from "../../assets/wallet.png";
import chat from "../../assets/chat.png"

export const NavBar = () => {
    return (
        <div className={styles.container}>

            <NavLink to="/" >
                <img src={wallet} alt="" />
            </NavLink>
            <NavLink to="/chats" >
                <img src={chat} alt="" />
            </NavLink>
            <NavLink to="/wallets"  >
                <img src={vtb} alt="" />
            </NavLink>

        </div>
    )
}
