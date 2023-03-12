import React from "react";
import styles from "../style/header.module.css";

import logo from "../images/logo_welbex.svg";
import telegram from "../images/telegram.svg";
import viber from "../images/viber.svg";
import whatsapp from "../images/whatsapp.svg";

export default function Header() {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="Logo Welbex" className={styles.img} />
        <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
      </div>
      <nav className={styles.nav_container}>
        <ul>
          <li>
            <a href="#">Услуги</a>
          </li>
          <li>
            <a href="#">Виджеты</a>
          </li>
          <li>
            <a href="#">Интеграции</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Сертификаты</a>
          </li>
        </ul>
      </nav>
      <div className={styles.credits_container}>
        <a href="tel:+75555555555">+7 555 555-55-55</a>
        <div className={styles.socials_container}>
          <a href="#">
            <img src={telegram} alt="telegram icon" />
          </a>
          <a href="#">
            <img src={viber} alt="viber icon" />
          </a>
          <a href="#">
            <img src={whatsapp} alt="whatsapp icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
