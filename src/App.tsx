import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { checkAuth } from './store/user/user.thunk';
import { storageKey } from './utils/axios';
import spinner from "./assets/spinner.gif";
import { WalletPage } from './pages/WalletPage/WalletPage';

const auth = false;
function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { token, login, logout, userId } = useAuth();
  const { isAuth } = useSelector((state: RootState) => {
    return { isAuth: state.user.isAuth };
  })

  const [isLoading, setLoading] = useState<boolean>(true);

  const checkLogin = async () => {
    if (localStorage.getItem(storageKey)) {
      try {
        setLoading(true);
        await dispatch(checkAuth("1"));
      } catch (error) {

      }
      finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }
  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      token,
      userId,
    }}>
      <HashRouter>
        <div className={styles.app}>
          {isLoading && <div className={styles.spinnerContainer}><img className={styles.spinner} src={spinner} alt="spinner" /></div>}
          {!isLoading && (
            <><div className={styles.pages} style={{ marginBottom: !isAuth ? "0px" : "80px" }}>
              {
                isAuth ? (
                  <Routes>
                    <Route path="/" element={<WalletsPage />} />
                    <Route path="/choose-acc" element={<ChooseAccountPage />} />
                    <Route path="/wallets-add" element={<AddWalletPage />} />
                    <Route path="/add-card" element={<AddNewCardPage />} />
                    <Route path="/requests" element={<RequestsPage />} />
                    <Route path="/ready" element={<CardReadyPage />} />
                    <Route path="/wallets" element={<WalletsPage />} />
                    <Route path="/wallets/:id" element={<WalletPage />} />
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
              {isAuth && <NavBar />}</>
          )}
        </div>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
