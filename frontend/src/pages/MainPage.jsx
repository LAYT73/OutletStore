import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import Up from './../assets/up.png';
import Down from './../assets/down.png';
import mainLogo from './../assets/mainLogo.png';
import footerLogo from './../assets/footerLogo.png';
import Cart from './../assets/cart.png';
import axios from 'axios';

const MainPage = () => {
  const [buttons, setButtons] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    titleBlock: "", 
    mainTitleBlock: "", 
    descriptionBlock: "", 
    titleInfo: "", 
    descriptionInfo: "", 
    buttonLink: "", 
    buttonText: "", 
    priceTitleFirst: "", 
    priceCostsFirst: "", 
    priceTitleSecond: "", 
    priceCostsSecond: ""
  })

  useEffect(()=>{
    axios.get(
      import.meta.env.VITE_API_URL+"/button"
    ).then((res)=>{
      console.log(res);
      setButtons(res.data);
    }).catch((err)=>{
      console.error(err);
    })
  },[])

  useEffect(()=>{
    axios.get(
      import.meta.env.VITE_API_URL+"/page"
    ).then((res)=>{
      console.log(res);
      if (res.data[0]) {
        setPageInfo(res.data[0]);
      }
    }).catch((err)=>{
      console.error(err);
    })
  },[])



  return (
    <div className={styles.main}>
      <div className={styles.main_container}>
        <img src={Up} alt="" className={styles.main_container_up} />
        <div className={styles.main_container_logo}>
          <img src={mainLogo} className={styles.main_container_logo_img} alt="" />
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.main_content_buttons}>
          {
            buttons[0] && buttons.map((el,i)=>{
              return (
                <button onClick={()=>{window.location.replace(el.link);}} className={styles.main_content_buttons_el}>
                  {el.title}
                </button>
              )
            })
          }
        </div>
        <div className={styles.main_content_description}>
          <img src={Cart} alt="" />
          <div className={styles.main_content_description_info}>
            <h3>{pageInfo.titleBlock}</h3>
            <h1>{pageInfo.mainTitleBlock}</h1>
            <p>
            {pageInfo.descriptionBlock}
            </p>
          </div>
        </div>
        <div className={styles.main_content_text}>
          <h1>{pageInfo.titleInfo}</h1>
          <h3>{pageInfo.descriptionInfo}</h3>
        </div>
        <button onClick={()=>{window.location.replace(pageInfo.buttonLink);}} className={styles.main_content_button}>
          {pageInfo.buttonText}
        </button>
      </div>
      <div className={styles.main_prices}>
        <div className={styles.main_prices_price}>
          <div className={styles.main_prices_price_header}>
            <div className={styles.main_prices_price_header_hr}>
            </div>
            <div className={styles.main_prices_price_header_title}>
              {pageInfo.priceTitleFirst}
            </div>
            <div className={styles.main_prices_price_header_hr}>
            </div>
          </div>
          <div className={styles.main_prices_price_body}>
            <h3 className={styles.main_prices_price_body_h3}>
            {pageInfo.priceCostsFirst}</h3>
          </div>
        </div>
        <div className={styles.main_prices_price}>
          <div className={styles.main_prices_price_header}>
            <div className={styles.main_prices_price_header_hr}>
            </div>
            <div className={styles.main_prices_price_header_title}>
              {pageInfo.priceTitleSecond}
            </div>
            <div className={styles.main_prices_price_header_hr}>
            </div>
          </div>
          <div className={styles.main_prices_price_body}>
            <h3 className={styles.main_prices_price_body_h3}>{pageInfo.priceCostsSecond}</h3>
          </div>
        </div>

      </div>
      <div className={styles.main_container2}>
        <img src={Down} alt="" className={styles.main_container2_down} />
        <div className={styles.main_container2_logo}>
          <img src={footerLogo} className={styles.main_container2_logo_img} alt="" />
        </div>
      </div>
    </div>
  )
};

export default MainPage;