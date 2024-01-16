import './App.css'
import { Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage';
import {LoginPage} from "./pages/LoginPage.jsx";
import {AdminPage} from "./pages/AdminPage.jsx";
import {ResetPage} from "./pages/ResetPage.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/panel" element={<AdminPage />}/>
          <Route path="/admin/reset" element={<ResetPage />}/>
      </Routes>
    </>
  )
}

export default App
