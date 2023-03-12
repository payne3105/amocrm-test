import React from "react";
import styles from "../style/button.module.css";

export default function Button() {
  return (
    <div className={styles.button_container}>
      <button className={styles.button}>Получить консультацию</button>
    </div>
  );
}
