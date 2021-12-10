import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import {
  HashRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import 'antd/dist/antd.css';

import styles from "./App.module.css";
import { WalletsPage } from './pages/WalletsPage/WalletsPage';
import { HelloPage } from './pages/HelloPage/HelloPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ChooseAccountPage } from './pages/ChooseAccountPage/ChooseAccountPage';
import { AddWalletPage } from './pages/AddWalletPage/AddWalletPage';
import { AddNewCardPage } from './pages/AddNewCardPage/AddNewCardPage';
import { RequestsPage } from './pages/RequestsPage/RequestsPage';
import { CardReadyPage } from './pages/CardReadyPage/CardReadyPage';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/authContext';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const auth = false;
function App() {
  const { token, login, logout, userId } = useAuth();
  const tokenAuth = useSelector((state: RootState) => {
    return state.user.auth_token;
  })
  return (
    <AuthContext.Provider value={{
      login,
      logout,
      token,
      userId,
    }}>
      <HashRouter>
        <div className={styles.app}>
          <div className={styles.pages}>
            {
              tokenAuth ? (
                <Routes>
                  <Route path="/" element={<WalletsPage />} />
                  <Route path="/choose-acc" element={<ChooseAccountPage />} />
                  <Route path="/wallets-add" element={<AddWalletPage />} />
                  <Route path="/add-card" element={<AddNewCardPage />} />
                  <Route path="/requests" element={<RequestsPage />} />
                  <Route path="/ready" element={<CardReadyPage />} />
                  <Route path="/wallets" element={<WalletsPage />} />
                  <Route path="/card-ready/:id" element={<CardReadyPage />} />
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
    </AuthContext.Provider>
  );
}

export default App;
