import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import 'antd/dist/antd.css';

import styles from "./App.module.css";
import { HomePage } from './pages/HomePage/HomePage';
import { WalletsPage } from './pages/WalletsPage/WalletsPage';
import { HelloPage } from './pages/HelloPage/HelloPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ChooseAccountPage } from './pages/ChooseAccountPage/ChooseAccountPage';
import { AddWalletPage } from './pages/AddWalletPage/AddWalletPage';
import { AddNewCardPage } from './pages/AddNewCardPage/AddNewCardPage';
const auth = false;
function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.pages}>
          {
            auth ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chats" element={<div>ff</div>} />
                <Route path="/wallets" element={<WalletsPage />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<HelloPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/choose-acc" element={<ChooseAccountPage />} />
                <Route path="/wallets-add" element={<AddWalletPage />} />
                <Route path="/add-card" element={<AddNewCardPage />} />
              </Routes>
            )
          }

        </div>
        {auth && <NavBar />}
      </div>
    </Router>
  );
}

export default App;
