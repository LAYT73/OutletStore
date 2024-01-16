import styles from './LoginPage.module.css';
import {useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const LoginPage = ({setIsAdmin, isAdmin}) => {
    const navigate = useNavigate();

    const [isActiveLogin, setIsActiveLogin] = useState(false);
    const [isActivePass, setIsActivePass] = useState(false);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
        if(isAdmin) {
            navigate("/admin/panel")
        }
    },[])
    const handleLogin = () => {
        console.log(login, password);
        axios.post('http://localhost:3000/auth/login', {
            login,
            password
          })
          .then(function (response) {
            if (response?.data?.code === 201) {
                localStorage.setItem("hash", response.data.token);
                localStorage.setItem("login", response.data.login )
                setIsAdmin(true);
                navigate("/admin/panel");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        setLogin('');
        setPassword('');
    }

    const handleInputFocusLogin = () => {
        setIsActiveLogin(true);
    };

    const handleInputBlurLogin = () => {
        setIsActiveLogin(false);
    };
    const handleInputFocusPass = () => {
        setIsActivePass(true);
    };

    const handleInputBlurPass = () => {
        setIsActivePass(false);
    };
    return (
        <div className={styles.container}>
            <div className={styles.inputs}>
                <input
                       placeholder={isActiveLogin ? '' : 'Введите логин'}
                       onFocus={handleInputFocusLogin}
                       onBlur={handleInputBlurLogin}
                       value={login}
                       onChange={e=>setLogin(e.target.value)}
                       type={'login'}/>
                <input placeholder={isActivePass ? '' : 'Введите логин'}
                       onFocus={handleInputFocusPass}
                       value={password}
                       onChange={e=>setPassword(e.target.value)}
                       onBlur={handleInputBlurPass} type={'password'}/>
                <button onClick={()=>handleLogin()} className={styles.btn}>
                    Вход
                </button>
            </div>

        </div>
    )
}