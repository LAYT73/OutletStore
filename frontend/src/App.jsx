import './App.css'
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import {LoginPage} from "./pages/LoginPage.jsx";
import {AdminPage} from "./pages/AdminPage.jsx";
import {ResetPage} from "./pages/ResetPage.jsx";
import { useEffect, useState } from 'react';
function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(()=>{
    const hash = localStorage.getItem("hash");
    if (hash) {
      setIsAdmin(true);
    }
  }, [])

  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/login" element={<LoginPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>} />
          <Route path="/admin/panel" element={<AdminPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
          <Route path="/admin/reset" element={<ResetPage isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
      </Routes>
    </>
  )
}

export default App
