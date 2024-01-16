import styles from './ResetPage.module.css'

import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export const ResetPage = ({isAdmin}) => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAdmin) {
            navigate("/admin/login")
        }
    },[])

    const [oldLogin, setOldLogin] = useState("");
    const [oldPassword, setOldPassword] = useState("")

    const [newLogin, setNewLogin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
  
    const handleSubmit = () => {
      if (confirmNewPassword == newPassword) {
        axios.put("http://localhost:3000/auth/update", {
            oldLogin, oldPassword, newLogin, newPassword, hash: localStorage.getItem("hash")
        })
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
      }
    };
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <h2 className={styles.container_header_title}>Admin Panel</h2>
            <h2 className={styles.container_header_title2}>Смена логина и пароля</h2>
            <input
              placeholder={'Введите старый логин'}
              type={'text'}
              value={oldLogin}
              onChange={(e) => setOldLogin(e.target.value)}
            />
            <input
              placeholder={'Введите старый пароль'}
              type={'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <hr />
          </div>
          <div className={styles.container_body}>
            <div className={styles.container_body_edit}>
              <input
                placeholder={'Введите новый логин'}
                type={'text'}
                value={newLogin}
                onChange={(e) => setNewLogin(e.target.value)}
              />
              <input
                placeholder={'Введите новый пароль'}
                type={'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                placeholder={'Повторите новый пароль'}
                type={'password'}
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <hr />
            </div>
            <button onClick={handleSubmit}>
              Сохранить
            </button>
            <Link className={styles.container_body_link} to={'/admin/panel'}>
              Вернуться назад
            </Link>
          </div>
        </div>
      </>
    );
}