import styles from './LoginPage.module.css';
import {useState} from "react";
export const LoginPage = () => {
    const [isActiveLogin, setIsActiveLogin] = useState(false);
    const [isActivePass, setIsActivePass] = useState(false);
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
                       type={'login'}/>
                <input placeholder={isActivePass ? '' : 'Введите логин'}
                       onFocus={handleInputFocusPass}
                       onBlur={handleInputBlurPass} type={'password'}/>
                <button className={styles.btn}>
                    Вход
                </button>
            </div>

        </div>
    )
}