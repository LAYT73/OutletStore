import styles from './InfoPage.module.css'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAlert } from 'react-alert'
export const InfoPage = ({isAdmin}) => {
    const alert = useAlert()

    const navigate = useNavigate();
    useEffect(()=>{
        if(!isAdmin) {
            navigate("/admin/login")
        }
    },[])

    const [formData, setFormData] = useState({
        titleBlock: '',
        mainTitleBlock: '',
        descriptionBlock: '',
        titleInfo: '',
        descriptionInfo: '',
        buttonText: '',
        buttonLink: '',
        priceTitleFirst: '',
        priceCostsFirst: '',
        priceTitleSecond: '',
        priceCostsSecond: '',
    });

    useEffect(()=>{
        axios.get(
          import.meta.env.VITE_API_URL+"/page"
        ).then((res)=>{
          if (res.data[0]) {
            setFormData(res.data[0]);
          }
        }).catch((err)=>{
          console.error(err);
        })
      },[])

    const handleChange = (e, name) => {
        const value = e.target.value;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = () => {
        
            const requestData = {
                hash: localStorage.getItem("hash"),
                ...formData,
            };

            axios.put(import.meta.env.VITE_API_URL+"/page/set", requestData)
                .then((res) => {
                    if (res.data == 0){
                        console.log(res);
                        alert.show('Данные успешно обновлены!', {
                          timeout: 4000, // custom timeout just for this one alert
                          type: 'success',
                        })
                      } else {
                        alert.show('Проверьте корректность введенных данных!', {
                          timeout: 4000, // custom timeout just for this one alert
                          type: 'error',
                        })
                    }
                }).catch((err) => {
                    console.log(err);
                });
        
    };
  
    return (
      <>
        <div className={styles.container}>
          <div className={styles.container_header}>
            <h2 className={styles.container_header_title}>Admin Panel</h2>
            <h2 className={styles.container_header_title2}>Смена текста на странице</h2>
            <textarea
              placeholder={'Введите заголовок блока'}
              type={'text'}
              value={formData.titleBlock}
              onChange={(e)=>handleChange(e, "titleBlock")}
            />
            <textarea
              placeholder={'Введите главный заголовок блока'}
              type={'text'}
              value={formData.mainTitleBlock}
                onChange={(e)=>handleChange(e, "mainTitleBlock")}
            />
            <textarea
              placeholder={'Введите описание блока'}
              type={'text'}
              value={formData.descriptionBlock}
                onChange={(e)=>handleChange(e, "descriptionBlock")}
            />
            <textarea
              placeholder={'Введите заголовок второго блока'}
              type={'text'}
              value={formData.titleInfo}
                onChange={(e)=>handleChange(e, "titleInfo")}
            />
            <textarea
              placeholder={'Введите описание второго блока'}
              type={'text'}
              value={formData.descriptionInfo}
                onChange={(e)=>handleChange(e, "descriptionInfo")}
            />
            <input
              placeholder={'Введите название кнопки'}
              type={'text'}
              value={formData.buttonText}
                onChange={(e)=>handleChange(e, "buttonText")}
            />
            <input
              placeholder={'Введите ссылку для кнопки'}
              type={'text'}
              value={formData.buttonLink}
                onChange={(e)=>handleChange(e, "buttonLink")}
            />
            <textarea
              placeholder={'Введите заголовок первого прайса'}
              type={'text'}
              value={formData.priceTitleFirst}
                onChange={(e)=>handleChange(e, "priceTitleFirst")}
            />
            <textarea
              placeholder={'Введите цены первого прайса'}
              type={'text'}
              value={formData.priceCostsFirst}
                onChange={(e)=>handleChange(e, "priceCostsFirst")}
            />
            <textarea
              placeholder={'Введите заголовок второго прайса'}
              type={'text'}
              value={formData.priceTitleSecond}
                onChange={(e)=>handleChange(e, "priceTitleSecond")}
            />
            <textarea
              placeholder={'Введите цены второго прайса'}
              type={'text'}
              value={formData.priceCostsSecond}
                onChange={(e)=>handleChange(e, "priceCostsSecond")}
            />
            <hr />
          </div>
          <div className={styles.container_body}>
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