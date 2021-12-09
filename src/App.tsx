import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
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
import { RequestsPage } from './pages/RequestsPage/RequestsPage';
import { CardReadyPage } from './pages/CardReadyPage/CardReadyPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
const auth = false;
function App() {
  const token = useSelector((state: RootState) => state.user.auth_token);

  return (
    <HashRouter>
      <div className={styles.app}>
        <div className={styles.pages}>
          {
            token ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/chats" element={<div>ff</div>} />
                <Route path="/wallets" element={<WalletsPage />} /> */}
                <Route path="/choose-acc" element={<ChooseAccountPage />} />
                <Route path="/wallets-add" element={<AddWalletPage />} />
                <Route path="/add-card" element={<AddNewCardPage />} />
                <Route path="/requests" element={<RequestsPage />} />
                <Route path="/ready" element={<CardReadyPage />} />
                <Route path="/wallets" element={<WalletsPage />} />
                <Route path="/card-ready" element={<CardReadyPage />} />
                <Route path="*" element={<Navigate to="/choose-acc" />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/" element={<HelloPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            )
          }

        </div>
        {auth && <NavBar />}
      </div>
    </HashRouter>
  );
}

export default App;
