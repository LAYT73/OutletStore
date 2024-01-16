import styles from './AdminPage.module.css'
import cross from './../assets/cross.png';
import up from './../assets/up2.png';
import down from './../assets/down2.png';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const AdminPage = ({ setIsAdmin, isAdmin }) => {
    const navigate = useNavigate();
    const login = localStorage.getItem("login");
    const [buttons, setButtons] = useState([]);

    const updateHandler = () => {
        axios.put("http://localhost:3000/button/update", {
            hash: localStorage.getItem("hash"),
            buttons: buttons,
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.error(err);
        })
    }

    useEffect(()=>{
        axios.get(
            "http://localhost:3000/button"
          ).then((res)=>{
            setButtons(res.data);
          }).catch((err)=>{
            console.error(err);
          })
    }, [])

    useEffect(()=>{
        if(!isAdmin) {
            navigate("/admin/login")
        }
    },[])


    const exitHandle = () => {
        localStorage.removeItem("hash");
        localStorage.removeItem("login")
        navigate("/");
    }

    const addButton = () => {
        setButtons(prev=>[...prev, {
            title: "",
            link: "",
        }])
    }

    const handleTitleChange = (index, newValue) => {
        setButtons((prevButtons) => {
          const newButtons = [...prevButtons];
          newButtons[index] = { ...newButtons[index], title: newValue };
          return newButtons;
        });
      };
    
      const handleLinkChange = (index, newValue) => {
        setButtons((prevButtons) => {
          const newButtons = [...prevButtons];
          newButtons[index] = { ...newButtons[index], link: newValue };
          return newButtons;
        });
      };

      const handleUp = (index) => {
        if (index > 0) {
          setButtons((prevButtons) => {
            const newButtons = [...prevButtons];
            // Swap the current button with the one above
            [newButtons[index], newButtons[index - 1]] = [newButtons[index - 1], newButtons[index]];
            return newButtons;
          });
        }
      };
    
      const handleDown = (index) => {
        if (index < buttons.length - 1) {
          setButtons((prevButtons) => {
            const newButtons = [...prevButtons];
            // Swap the current button with the one below
            [newButtons[index], newButtons[index + 1]] = [newButtons[index + 1], newButtons[index]];
            return newButtons;
          });
        }
      };
    
      const handleDelete = (index) => {
        setButtons((prevButtons) => {
          const newButtons = prevButtons.filter((_, i) => i !== index);
          return newButtons;
        });
      };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_header}>
                    <h2>Admin Panel <br/> ( {login} )</h2>
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
                    {
                        buttons[0] && buttons.map((el,i)=>{
                            return (
                            <div className={styles.container_body_edit}>
                                <div className={styles.container_body_edit_button}>
                                    <input placeholder={'Название кнопки'} value={el.title} onChange={(e)=>{handleTitleChange(i, e.target.value)}} type={'text'}/>
                                    <button onClick={() => handleUp(i)}><img src={up} alt={''} /></button>
                                    <button onClick={() => handleDown(i)}><img src={down} alt={''} /></button>
                                    <button onClick={() => handleDelete(i)}><img src={cross} alt={''} /></button>
                                </div>
                                <input placeholder={'Укажите ссылку'} value={el.link} onChange={(e)=>{handleLinkChange(i, e.target.value)}} className={styles.container_body_edit_link} type={'text'}/>
                                <hr/>
                            </div>
                            )
                        })
                    }

                    <button onClick={addButton}>
                        Добавить кнопку
                    </button>
                    <button onClick={updateHandler}>
                        Сохранить
                    </button>
                </div>
            </div>
        </>
    )
}