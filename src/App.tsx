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

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.pages}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chats" element={<div>ff</div>} />
            <Route path="/test" element={<WalletsPage />} />
          </Routes>
        </div>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
