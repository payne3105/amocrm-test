import React from "react";
import styles from "../style/footer.module.css";

import telegram from "../images/telegram.svg";
import viber from "../images/viber.svg";
import whatsapp from "../images/whatsapp.svg";

export default function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_left}>
        <div>
          <h3>О компании</h3>
          <div className={styles.list_about}>
            <a href="#">Партнёрская программа</a>
            <a href="#">Вакансии</a>
          </div>
        </div>
        <div>
          <h3>Меню</h3>
          <div className={styles.list_menu}>
            <div>
              <a href="#">Расчёт стоимости</a>
              <a href="#">Услуги</a>
              <a href="#">Виджеты</a>
              <a href="#">Интеграции</a>
              <a href="#">Наши клиенты</a>
            </div>
            <div>
              <a href="#">Кейсы</a>
              <a href="#">Благодарственные письма</a>
              <a href="#">Сертификаты</a>
              <a href="#">Блог на Youtube</a>
              <a href="#">Вопрос / Ответ</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_right}>
        <h3>Контакты</h3>
        <div className={styles.right_contacts}>
          <a href="tel:+75555555555">+7 555 555-55-55</a>
          <div>
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
          <a href="#">Москва, Путевой проезд 3с1, к 902</a>
        </div>
      </div>
    </div>
  );
}
