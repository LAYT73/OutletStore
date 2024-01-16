import styles from './AdminPage.module.css'
import cross from './../assets/cross.png';
import up from './../assets/up2.png';
import down from './../assets/down2.png';
import { useNavigate } from "react-router-dom";
export const AdminPage = () => {
    const navigate = useNavigate();
    const exitHandle = () => {
        navigate("/");
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_header}>
                    <h2>Admin Panel <br/> ( Username )</h2>
                    <button onClick={()=> navigate("/admin/reset")}>
                        Сменить логин / пароль
                    </button>
                    <button onClick={exitHandle}>
                        Выход
                    </button>
                    <hr/>
                    <button>
                        Редактирование страницы
                    </button>
                    <hr/>
                </div>
                <div className={styles.container_body}>
                    <div className={styles.container_body_edit}>
                        <div className={styles.container_body_edit_button}>
                            <input placeholder={'Название кнопки'} type={'text'}/>
                            <button><img src={up} alt={''}/></button>
                            <button><img src={down} alt={''}/></button>
                            <button><img src={cross} alt={''}/></button>
                        </div>
                        <input placeholder={'Укажите ссылку'} className={styles.container_body_edit_link} type={'text'}/>
                        <hr/>
                    </div>

                    <button>
                        Добавить кнопку
                    </button>
                </div>
            </div>
        </>
    )
}