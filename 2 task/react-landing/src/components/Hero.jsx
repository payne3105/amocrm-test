import React from "react";
import styles from "../style/hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.left_container}>
        <h1>
          Зарабатывайте больше <br />
          <span>с WELBEX</span>
        </h1>
        <p>Развиваем и контролируем продажи за вас</p>
      </div>
      <div className={styles.right_container}>
        <h2>
          Вместе с{" "}
          <span>
            бесплатной <br /> консультацией
          </span>{" "}
          мы дарим:
        </h2>
        {window.innerWidth >= 400 ? (
          <div className={styles.right_cards}>
            <div>
              <h3>Виджеты</h3>
              <p>30 готовых решений</p>
            </div>
            <div>
              <h3>Dashboard</h3>
              <p>с показателями вашего бизнеса</p>
            </div>
            <div>
              <h3>Skype Аудит</h3>
              <p>отдела продаж и CRM системы</p>
            </div>
            <div>
              <h3>35 дней</h3>
              <p>использования CRM</p>
            </div>
          </div>
        ) : (
          <div className={styles.div_mobile}>
            <p className={styles.p_mobile}>
              <span>— </span>Skype аудит
            </p>
            <p className={styles.p_mobile}>
              <span>— </span>30 виджетов
            </p>
            <p className={styles.p_mobile}>
              <span>— </span>Dashboard
            </p>
            <p className={styles.p_mobile}>
              <span>— </span>Месяц аmoCRM
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
