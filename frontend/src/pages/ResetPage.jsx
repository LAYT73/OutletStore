import styles from './ResetPage.module.css'
import up from "../assets/up2.png";
import down from "../assets/down2.png";
import cross from "../assets/cross.png";
import {Link} from "react-router-dom";
export const ResetPage = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_header}>
                    <h2 className={styles.container_header_title}>Admin Panel</h2>
                    <h2 className={styles.container_header_title2}>Смена логина и пароля</h2>
                    <input placeholder={'Введите старый логин'} type={'text'}/>
                    <input placeholder={'Введите старый пароль'} type={'password'}/>
                    <hr/>
                </div>
                <div className={styles.container_body}>
                    <div className={styles.container_body_edit}>
                        <input placeholder={'Введите новый логин'} type={'text'}/>
                        <input placeholder={'Введите новый пароль'} type={'password'}/>
                        <input placeholder={'Повторите новый пароль'} type={'password'}/>
                        <hr/>
                    </div>
                    <button>
                        Сохранить
                    </button>
                    <Link className={styles.container_body_link} to={'/admin/panel'}>
                        Вернуться назад
                    </Link>
                </div>
            </div>
        </>
    )
}