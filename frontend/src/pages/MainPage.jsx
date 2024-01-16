import React from 'react';
import styles from './MainPage.module.css';
import Up from './../assets/up.png';
import Down from './../assets/down.png';
import mainLogo from './../assets/mainLogo.png';
import footerLogo from './../assets/footerLogo.png';
import Cart from './../assets/cart.png';

const MainPage = () => {
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
          <button className={styles.main_content_buttons_el}>
            Игровые аккаунты
          </button>
          <button className={styles.main_content_buttons_el}>
            Ключи активации
          </button>
          <button className={styles.main_content_buttons_el}>
            Бот Telegram
          </button>
          <button className={styles.main_content_buttons_el}>
            Чат Telegram
          </button>
          <button className={styles.main_content_buttons_el}>
            Канал Telegram
          </button>
          <button className={styles.main_content_buttons_el}>
            Связь с поддержкой
          </button>
          <button className={styles.main_content_buttons_el}>
            Группа ВКонтакте
          </button>
          <button className={styles.main_content_buttons_el}>
            plati.ru
          </button>
          <button className={styles.main_content_buttons_el}>
            Связь с администратором
          </button>
        </div>
        <div className={styles.main_content_description}>
          <img src={Cart} alt="" />
          <div className={styles.main_content_description_info}>
            <h3>OUTLET STORE - Твой проводник</h3>
            <h1>Играй больше, плати<br /> в два раза меньше!</h1>
            <p>
            Мы внимательно следим за актуальностью продаваемых ключей и аккаунтов. Весь ассортимент добыт мирным путём, без мошенничества. Прочитайте отзывы. Покупайте смело и наслаждайтесь.
            </p>
          </div>
        </div>
        <div className={styles.main_content_text}>
          <h1>А ещё у нас можно выгодно купить донат!</h1>
          <h3>Еженедельно мы разыгрываем донат-коды в самых популярных играх. <br />Присоединяйся в наш канал, следи за постами и побеждай.</h3>
        </div>
        <button className={styles.main_content_button}>
          Узнать стоимость доната
        </button>
      </div>
      <div className={styles.main_prices}>
        <div className={styles.main_prices_price}>
          <div className={styles.main_prices_price_header}>
            <div className={styles.main_prices_price_header_hr}>
            </div>
            <div className={styles.main_prices_price_header_title}>
              GTA 5 RP
            </div>
            <div className={styles.main_prices_price_header_hr}>
            </div>
          </div>
          <div className={styles.main_prices_price_body}>
            <h3 className={styles.main_prices_price_body_h3}>10к - 85</h3>
            <h3 className={styles.main_prices_price_body_h3}>25к - 200</h3>
            <h3 className={styles.main_prices_price_body_h3}>50к - 350</h3>
            <h3 className={styles.main_prices_price_body_h3}>200к - 1200</h3>
            <h3 className={styles.main_prices_price_body_h3}>500к - 2800</h3>
            <h3 className={styles.main_prices_price_body_h3}>1кк - 5400</h3>
          </div>
        </div>
        <div className={styles.main_prices_price}>
          <div className={styles.main_prices_price_header}>
            <div className={styles.main_prices_price_header_hr}>
            </div>
            <div className={styles.main_prices_price_header_title}>
              Data Random
            </div>
            <div className={styles.main_prices_price_header_hr}>
            </div>
          </div>
          <div className={styles.main_prices_price_body}>
            <h3 className={styles.main_prices_price_body_h3}>1шт - 300</h3>
            <h3 className={styles.main_prices_price_body_h3}>2шт - 550</h3>
            <h3 className={styles.main_prices_price_body_h3}>5шт - 1300</h3>
            <h3 className={styles.main_prices_price_body_h3}>10шт - 2300</h3>
            <h3 className={styles.main_prices_price_body_h3}>25шт - 4000</h3>
            <h3 className={styles.main_prices_price_body_h3}>40шт - 6200</h3>
            <h3 className={styles.main_prices_price_body_h3}>50шт - 7100</h3>
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